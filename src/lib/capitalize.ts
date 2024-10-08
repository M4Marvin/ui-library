const capitalize = (s: string): string => {
	if (s.length === 0) {
		return "";
	}
	return s && s[0]?.toUpperCase() + s.slice(1);
};

export default capitalize;
