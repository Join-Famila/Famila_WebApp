import React, { useEffect, useState } from 'react';
import * as styles from './BottomSheetStyle';
import MyMeetingList from './MyMeetingList_BottomSheet/MyMeetingList'
import ShowMap from './ShowMap_BottomSheet/ShowMap'
import JoinedMember from './JoinedMember_BottomSheet/JoinedMember'


const BottomSheet = ({
    isOpen,
    meetingList,
    myMeeting,
    toggleBottomSheet,
    selectBottomSheetPage,
    meetingSchedule,
    currentMapId,
    joinedMember
}) => {
        
    const [location, setLocation] = useState("");
    const [locationDetail, setLocationDetail] = useState("");
    useEffect(() => {
        for (let i = 0; i < meetingSchedule.length; i++) { 
            if (meetingSchedule[i].id === currentMapId) {
                setLocation(meetingSchedule[i].location);
                setLocationDetail(meetingSchedule[i].locationDetail);
            }
        }
    }, [currentMapId]);
    
  return (
      <styles.BottomSheetBody isOpen={isOpen}>
          {selectBottomSheetPage === "showMoreMeeting" ?
              <MyMeetingList
              meetingList={meetingList}
              myMeeting={myMeeting}
              toggleBottomSheet={toggleBottomSheet}
              /> :
              selectBottomSheetPage === "showMap" ? 
                  <ShowMap
                      toggleBottomSheet={toggleBottomSheet}
                      location={location}
                      locationDetail={locationDetail}
                  /> :
                selectBottomSheetPage === "joinedMember" ? 
                      <JoinedMember joinedMember={joinedMember} toggleBottomSheet={toggleBottomSheet} /> :
                <></>
          }
          

      </styles.BottomSheetBody>
  )
}

export default BottomSheet