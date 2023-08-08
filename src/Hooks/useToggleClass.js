const useToggleClass = ({historyRef, setToggleHistoryView,toggleHistoryView, examsRef, setToggleExamsView,toggleExamsView}) => {
    function toggleHistoryClass(){
        historyRef.current.classList.toggle('hidden');
        setToggleHistoryView(!toggleHistoryView);
    }

    function toggleExamsClass(){
        examsRef.current.classList.toggle('hidden');
        setToggleExamsView(!toggleExamsView);
    }
  return {
    toggleHistoryClass,
    toggleExamsClass
  }
}

export default useToggleClass