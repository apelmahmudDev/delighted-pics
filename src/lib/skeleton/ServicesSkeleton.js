import React from "react";
// react loading skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServicesSkeleton = () => {
	return (
		<div className="bg-gray-50 rounded-md p-3 shadow ">
			<div className="overflow-hidden h-52">
				<div>
					<Skeleton height={200} />
				</div>
			</div>
			<h2 className="my-2 w-48">
				<Skeleton />
			</h2>
			<p className="text-gray-700">
				<Skeleton count={2} />
			</p>

			<h2 className="w-48">
				<Skeleton />
			</h2>
			<div className="sm:flex items-center justify-between mt-4 w-full">
				<div className="mr-2 w-full">
					<Skeleton height={30} />
				</div>
				<div className="w-full my-1">
					<Skeleton height={30} />
				</div>
			</div>
		</div>
	);
};

export default ServicesSkeleton;
