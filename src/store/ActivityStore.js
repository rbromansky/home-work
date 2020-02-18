import uuid from "uuid/v4";
import { types as t } from "mobx-state-tree";
import { getActivities } from "./NodeServer";

export const ActivityModel = t.model("TodoModel", {
  date: t.string,
  type: t.string,
  distance: t.number,
  duration: t.number,
  speed: t.number
});

export const ActivityListModel = t
  .model("ActivityListModel", {
    list: t.array(ActivityModel)
  })
  .views(store => ({
    get runList() {
      return store.list.filter(item => item.type === "Run");
    },
    get rideList() {
      return store.list.filter(item => item.type === "Ride");
    },
    get runTotalDistance() {
      let total = 0;
      store.runList.map(activity => (total = total + activity.distance));

      return total;
    },
    get rideTotalDistance() {
      let total = 0;
      store.rideList.map(activity => (total = total + activity.distance));

      return total;
    },
    get longestRun() {
      let longest = store.runList[0];
      store.runList.map(
        activity =>
          (longest = longest < activity.distance ? activity.distance : longest)
      );
      return longest;
    },
    get longestRide() {
      let longest = store.rideList[0];
      store.rideList.map(
        activity =>
          (longest =
            longest.distance < activity.distance ? activity.distance : longest)
      );

      return longest;
    }
  }))
  .actions(store => ({
    add(date, type, distance, duration, speed) {
      const activity = ActivityModel.create({
        id: uuid(),
        date,
        type,
        distance,
        duration,
        speed
      });
      store.list.unshift(activity);
    },
    async addActivity() {
      const activity = await getActivities();
      activity.map(activity => {
        store.add(
          activity.date,
          activity.type,
          activity.distance,
          activity.duration,
          activity.speed
        );

        return true;
      });
    }
  }));

const rootStore = ActivityListModel.create({});
export default rootStore;
