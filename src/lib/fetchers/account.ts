import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { getDataAdapter } from "../data-adapter.ts";
import type { AccountType, UserType } from "@/schema";

export function AccountSuspenseQueryOptions(
	accountId: string,
): UseSuspenseQueryOptions<AccountType> {
	return {
		queryKey: ["account", accountId],
		queryFn: () =>
			getDataAdapter()
				.getAccount(accountId)
				.then((res) => res.data),
	};
}

export function AccountListSuspenseQueryOptions(): UseSuspenseQueryOptions<
	AccountType[]
> {
	return {
		queryKey: ["accountList"],
		queryFn: () =>
			getDataAdapter()
				.getAccountList()
				.then((res) => res.data),
	};
}
