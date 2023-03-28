import MeetupList from "@/components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: "1",
        title: "the first meetup",
        image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
        address: "some address",
        description: "description of the first meetup",
    }, {
        id: "2",
        title: "the second meetup",
        image: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        address: "some address 2",
        description: "description of the second meetup",
    }, {
        id: "3",
        title: "the third meetup",
        image: "https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        address: "some address 3",
        description: "description of the third meetup",
    }
]

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage