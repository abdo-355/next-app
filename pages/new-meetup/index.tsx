import NewMeetupForm from "@/components/meetups/NewMeetupForm"

import { IMeetupItem } from "@/components/meetups/MeetupItem"

const NewMeetupPage = () => {
    const addMeetupHandler = (meetupData: IMeetupItem) => {
        console.table(meetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage