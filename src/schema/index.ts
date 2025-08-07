export * from "./message";

import { MessageType } from "./message";

export interface Contact {
	wxid: `wxid_${string}`;
	id: string;
	nickname: string;
	nicknamePinyin: string;
	remark: string;
	remarkPinyin: string;
	remarkPinyinInits: string;
}

export interface UserType {
	id: string; // wxid
	user_id: string;
	username: string;
	remark?: string;
	bio?: string;
	photo?: {
		origin?: string;
		thumb: string;
	};
	background?: string; // 朋友圈背景
	phone?: string;
	is_openim: boolean;
}

export interface AccountType extends UserType {}

export interface ChatroomType {
	id: `${string}@chatroom`;
	title: string;
	remark?: string;
	photo?: {
		origin?: string;
		thumb: string;
	};

	members: UserType[];
	is_openim: boolean;
}

interface BasicChatType {
	id: string;
	title: string;
	photo?: string;
	last_message?: MessageType;
	is_muted: boolean;
	is_pinned: boolean;
	is_collapsed: boolean;
	members: UserType[];
	background?: string;
}

export interface PrivateChatType extends BasicChatType {
	type: "private";
	user: UserType;
}

export interface GroupChatType extends BasicChatType {
	type: "chatroom";
	chatroom: ChatroomType;
}

export type ChatType = PrivateChatType | GroupChatType;

export interface PhotpSize {
	src: string;
	size: "origin" | "thumb";
	width?: number;
	height?: number;
	file_size?: number;
}

export interface VideoInfo {
	src?: string;
	poster: string;
	poster_width?: number;
	poster_height?: number;
	file_size?: number;
}

export interface VoiceInfo {
	src?: string;
	raw_aud_src: string;
	transcription?: string;
	file_size?: number;
}

export interface FileInfo {
	src: string;
}
