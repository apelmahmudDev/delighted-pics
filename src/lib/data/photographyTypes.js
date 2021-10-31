import Portrait from "../../images/types/front-camera.png";
import Photojournalism from "../../images/types/photo.png";
import dress from "../../images/types/dress.png";
import sports from "../../images/types/sports.png";
import workLife from "../../images/types/work-life.png";
import architecture from "../../images/types/architecture.png";

const photographyTypes = [
	{
		id: 1,
		title: "Portrait Photography",
		image: Portrait,
		details:
			"One of the most common photography styles, portrait photography, or portraiture",
	},
	{
		id: 2,
		title: "Photojournalism",
		image: Photojournalism,
		details:
			"Photojournalism is a way of telling the story of a newsworthy event photographs.",
	},
	{
		id: 3,
		title: "Fashion Photography",
		image: dress,
		details:
			"Fashion photography showcases fashion clothing, shoes, and accessories",
	},
	{
		id: 4,
		title: "Sports Photography",
		image: sports,
		details:
			"sports photographs can depict the passion, emotion that fuels sporting events.",
	},
	{
		id: 5,
		title: "Still Life Photography",
		image: workLife,
		details:
			"Like it sounds, still life photography features inanimate objects—natural or manmade",
	},
	{
		id: 6,
		title: "Architectural Photography",
		image: architecture,
		details:
			"interior, exterior design of buildings are the subject of architectural photography",
	},
];

export default photographyTypes;
