
const useInterrogatoryForm = ({interrogatoryRefs}) => {

    const {
        nameRef,
        sexRef,
        ageRef,
        reasonConsultingRef,
        actualDiseaseRef
    } = interrogatoryRefs;

    const getInterrogatoryData = ()=> {
        return {
            name: nameRef.current.value,
            date: new Date(),
            sex: sexRef.current.value,
            age: ageRef.current.value,
            reasonConsulting: reasonConsultingRef.current.value,
            actualDisease: actualDiseaseRef.current.value
        }
    }

  return {
    getInterrogatoryData,
  }
}

export default useInterrogatoryForm