import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSidebar from "./ActivityDetailSidebar";

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
}) => {
  const activityStore = useContext(ActivityStore);
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity)
    return <LoadingComponent content='Loading activity...' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailHeader activity={activity}></ActivityDetailHeader>
        <ActivityDetailInfo activity={activity}></ActivityDetailInfo>
        <ActivityDetailChat></ActivityDetailChat>
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailSidebar></ActivityDetailSidebar>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);
