const useExamsForm = ({examRefs}) => {
    const {
        vitalSignsRef,
        skinRef,
        headRef,
        toraxRef,
        cardiovascularSystemRef,
        abdomenRef,
        genitalsRef,
        nervousSystemRef
    } = examRefs

    const getExamData = ()=> {
        return {
            vitalSigns: vitalSignsRef.current.value,
            skin: skinRef.current.value,
            head: headRef.current.value,
            torax: toraxRef.current.value,
            cardiovascularSystem: cardiovascularSystemRef.current.value,
            abdomen: abdomenRef.current.value,
            genitals: genitalsRef.current.value,
            nervousSystem: nervousSystemRef.current.value,
                  
          }
    }

    return {
        getExamData
    }
}

export default useExamsForm