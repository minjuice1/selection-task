const whichRole = (user) => {
	if (user?.roles?.Admin) {
		return "Admin";
	} else if (user?.roles?.Manager) {
		return "Manager";
	} else {
		return "User";
	}
};

export default whichRole;
