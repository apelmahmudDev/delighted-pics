import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useRef, useState } from "react";

const AddService = () => {
	const [isUploading, setIsUpLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	// catch input value by using useRef hook
	const nameRef = useRef();
	const feeRef = useRef();
	const descriptionRef = useRef();
	const qualityRef = useRef();
	const photoRef = useRef();

	// handle image uploader (image upload by api in imgBB)
	const imageUploadHandler = (e) => {
		setIsUpLoading(true);
		const imageData = new FormData();
		imageData.set("key", process.env.REACT_APP_IMAGE_API_KEY); // set api key
		imageData.append("image", photoRef.current.files[0]);

		axios
			.post("https://api.imgbb.com/1/upload", imageData)
			.then((res) => {
				setImageUrl(res.data.data.url);
				setIsUpLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// handle add service and save at the database
	const handleAddService = async (e) => {
		e.preventDefault();

		const service = {
			name: nameRef.current.value,
			fee: feeRef.current.value,
			quality: qualityRef.current.value,
			img: imageUrl,
			description: descriptionRef.current.value,
		};

		// add service info at mongodb
		try {
			setMessage("");
			const url = "https://fierce-river-40368.herokuapp.com/addService";
			const option = {
				method: "POST",
				body: JSON.stringify(service),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			};
			const response = await fetch(url, option);
			const data = await response.json();
			if (data) {
				setMessage("Your service added into database successfully.");
				nameRef.current.value = "";
				feeRef.current.value = "";
				qualityRef.current.value = "";
				descriptionRef.current.value = "";
			}
		} catch (error) {
			console.log("err", error);
		}
	};

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12">
			<div className="bg-white rounded-xl p-4">
				<form onSubmit={handleAddService}>
					<div className="mt-4 md:flex justify-around gap-2">
						<div>
							<div className="mb-4">
								<label className="font-semibold">Service Name</label>
								<input
									type="text"
									ref={nameRef}
									className="form-control"
									required
									placeholder="Enter service name"
								/>
							</div>
							<div className="mb-4">
								<label className="font-semibold">Add Fee</label>
								<input
									type="text"
									ref={feeRef}
									className="form-control"
									required
									placeholder="Enter service fee"
								/>
							</div>
							<div className="mb-4">
								<label className="font-semibold">Description</label>
								<textarea
									type="text"
									ref={descriptionRef}
									rows="4"
									className="form-control"
									required
									placeholder="Enter Service description"
								/>
							</div>
						</div>
						<div>
							<div className="mb-4">
								<label className="font-semibold">Quality</label>
								<input
									type="text"
									ref={qualityRef}
									className="form-control"
									required
									placeholder="Enter service quality"
								/>
							</div>
							<div className="mb-4">
								<label className="font-semibold">Add Photo</label>
								<input
									type="file"
									onChange={imageUploadHandler}
									ref={photoRef}
									required
									className="form-control"
								/>
							</div>
							{/* image uploading message by spinner */}
							{isUploading && (
								<div className="font-semibold text-primary ml-2">
									<span className="mr-3 ">Uploading</span>
									<FontAwesomeIcon
										icon={faSpinner}
										spin
										size="lg"
										className="text-primary"
									/>
								</div>
							)}
						</div>
					</div>
					<div className="text-right">
						<div className="text-md text-green-500 mb-4">{message}</div>
						<input
							type="submit"
							className="px-4 py-2 rounded text-primary border main-btn"
							value="Save"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddService;
