const useHistoryForm = ({historyRefs}) => {

    const {physiologicalRef,
        pathologicalRef,
        gynecologyRef,
        pathologyRef,
        abortionsRef,
        surgicalInterventionsRef,
        pharmacologicalTreatRef,
        intoxicationsRef,
        hereditaryRef,
        habitsRef} = historyRefs

    const getHistoryData = ()=> {
        return {
            physiological: physiologicalRef.current.value,
            pathological: pathologicalRef.current.value,
            gynecology: gynecologyRef.current.value,
            pathology: pathologyRef.current.value,
            abortions: abortionsRef.current.value,
            surgicalInterventions: surgicalInterventionsRef.current.value,
            pharmacologicalTreat: pharmacologicalTreatRef.current.value,
            intoxications: intoxicationsRef.current.value,
            hereditary: hereditaryRef.current.value,
            habits: habitsRef.current.value
        }
    }

  return {getHistoryData}
}

export default useHistoryForm