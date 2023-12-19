import React from 'react';
import * as styles from './BottomSheetStyle';
import MyMeetingList from './MyMeetingList_BottomSheet/MyMeetingList'
import ShowMap from './ShowMap_BottomSheet/ShowMap'


const BottomSheet = ({isOpen, meetingList, myMeeting, toggleBottomSheet, selectBottomSheetPage, meetingSchedule}) => {
    
  return (
      <styles.BottomSheetBody isOpen={isOpen}>
          {selectBottomSheetPage === "showMoreMeeting" ?
              <MyMeetingList
              meetingList={meetingList}
              myMeeting={myMeeting}
              toggleBottomSheet={toggleBottomSheet}
              /> : selectBottomSheetPage === "showMap" ? 
                  <ShowMap
                      toggleBottomSheet={toggleBottomSheet}
                      meetingSchedule={meetingSchedule}
                  /> :
              <></>
          }
          

      </styles.BottomSheetBody>
  )
}

export default BottomSheet