import { getAuth } from "context/RecoilProvider";
import { useRecoilValue } from "recoil";

const useAuthState = () => {
	return useRecoilValue(getAuth);
};

export default useAuthState;
