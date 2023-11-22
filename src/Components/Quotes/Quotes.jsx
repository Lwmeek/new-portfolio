import React, { useEffect, useState } from "react";

const Quotes = ({ maxChar = 100 }) => {
	const [data, setData] = useState([]);
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		fetch(`https://api.api-ninjas.com/v1/quotes?category=inspirational`, {
			headers: {
				"X-Api-Key": "LoFStGE9rzs7poLsoUPqFg==2lzCbz7sK0MTooJx",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	if (data[0]?.quote.length <= maxChar) {
		return (
			<div className="text-center w-3/4 m-auto bg-neutral p-3 rounded-md">
				<h2 className="underline underline-offset-4 mb-2">
					Inspirational Quote
				</h2>
				<p>"{data[0]?.quote}"</p>
			</div>
		);
	} else if (data[0]?.quote.length === undefined) {
		return "";
	}

	const quote = expanded
		? data[0]?.quote
		: data[0]?.quote.substring(0, maxChar) + "...";

	return (
		<div className="text-center w-3/4 m-auto bg-neutral p-3 rounded-md">
			<h2 className="underline underline-offset-4 mb-2">Inspirational Quote</h2>
			<p>"{quote}"</p>
			<button
				className="btn btn-ghost ml-4"
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? "Less" : "More"}
			</button>
		</div>
	);
};

export default Quotes;
