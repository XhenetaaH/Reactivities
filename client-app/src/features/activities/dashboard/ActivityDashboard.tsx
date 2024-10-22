import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityCreate from "../Create/ActivityCreate";

interface Props{
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {activities[1] && 
                <ActivityDetails activity={activities[1]}/>}
                <ActivityCreate/>
            </Grid.Column>
        </Grid>
    )
}