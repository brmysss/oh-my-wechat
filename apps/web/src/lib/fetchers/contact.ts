import { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { getDataAdapter } from "../data-adapter";
import { ChatroomType, ContactType, UserType } from "@/schema";

export function AccountContactListSuspenseQueryOptions(
	accountId: string,
): UseSuspenseQueryOptions<ContactType[]> {
	return {
		queryKey: ["accountContactList", accountId],
		queryFn: () =>
			getDataAdapter()
				.getAccountContactList({
					accountId,
				})
				.then((res) => res.data)
				.catch((e) => {
					throw e;
				}),
	};
}
