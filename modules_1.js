function Meetup() {
    console.log(" WordPress Butwal Meetup is going on.")
}
export default Meetup();



export const sumNow = (first,...args) =>{
    for(let i=0; i < args.length; i++)
        first+=args[i]

    return first
}







































export function meetup2(attendees) {
    console.log(attendees + ' are watching meetup now')
}