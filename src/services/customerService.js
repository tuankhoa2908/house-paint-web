import callApi from "@/api/callAPI";

export const customerService = {
    	newInquiry: async (data) => {
		const response = await callApi("customer/new-inquiry", "post", data);
		return response;
	},
};