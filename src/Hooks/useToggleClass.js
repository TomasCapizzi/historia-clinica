const useToggleClass = ({historyRef, setToggleHistoryView,toggleHistoryView, examsRef, setToggleExamsView,toggleExamsView}) => {
    function toggleHistoryClass(){
        historyRef.current.classList.toggle('on');
        setToggleHistoryView(!toggleHistoryView);
    }

    function toggleExamsClass(){
        examsRef.current.classList.toggle('on');
        setToggleExamsView(!toggleExamsView);
    }
  return {
    toggleHistoryClass,
    toggleExamsClass
  }
}

export default useToggleClass