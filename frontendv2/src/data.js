import React from 'react';
import {
	FaBehance,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaSketch,
	FaHome,
} from 'react-icons/fa';

import { FiMonitor, FiSettings, FiBell, FiLogOut } from "react-icons/fi";
import { HiChip } from "react-icons/hi";
import { TbRouter } from "react-icons/tb";
import { BsQuestionLg } from "react-icons/bs";

export const links = [
	{
		id: 0,
		url: '/',
		text: 'home',
		icon: <FaHome className="w-5 h-5" />,
	},
	{
		id: 1,
		url: '/dashboards',
		text: 'dashboards',
		icon: <FiMonitor className="w-5 h-5" />,
	},
	{
		id: 2,
		url: '/devices',
		text: 'devices',
		icon: <HiChip className="w-5 h-5" />,
	},
	{
		id: 3,
		url: '/gateways',
		text: 'gateways',
		icon: <TbRouter className="w-5 h-5" />,
	},
	{
		id: 4,
		url: '/help',
		text: 'help',
		icon: <BsQuestionLg className="w-5 h-5" />,
	},
	{
		id: 5,
		url: '/settings',
		text: 'settings',
		icon: <FiSettings className="w-5 h-5" />,
	},
	{
		id: 6,
		url: '/alerts',
		text: 'alerts',
		icon: <FiBell className="w-5 h-5" />,
	},
	{
		id: 7,
		url: '/logout',
		text: 'logout',
		icon: <FiLogOut className="w-5 h-5" />,
	},
];

export const social = [
	{
		id: 1,
		url: 'https://www.twitter.com',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.twitter.com',
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: 'https://www.twitter.com',
		icon: <FaBehance />,
	},
	{
		id: 5,
		url: 'https://www.twitter.com',
		icon: <FaSketch />,
	},
];
