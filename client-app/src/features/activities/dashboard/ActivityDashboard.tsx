import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityCreate from "../Create/ActivityCreate";

interface Props{
    activities: Activity[];
    selectedActivity : Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, selectedActivity,submitting, selectActivity, cancelSelectActivity,
    editMode, openForm, closeForm, createOrEdit, deleteActivity
}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                    />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity = {selectedActivity} 
                    cancelSelectActivity = {cancelSelectActivity}
                    openForm ={openForm}
                    />}
                    {
                        editMode &&                    
                <ActivityCreate 
                    closeForm = {closeForm} 
                    activity={selectedActivity} 
                    createOrEdit = {createOrEdit}
                    submitting = {submitting}/>}
            </Grid.Column>
        </Grid>
    )
}