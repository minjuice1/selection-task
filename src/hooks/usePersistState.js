import { getPersist } from "context/RecoilProvider";
import { useRecoilValue } from "recoil";

const usePersistState = () => {
	return useRecoilValue(getPersist);
};

export default usePersistState;
