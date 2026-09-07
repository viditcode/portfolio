// data/social-links.ts
import {
    FaGithub,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaXTwitter,
    FaThreads,
} from "react-icons/fa6";
import { IconType } from "react-icons";

export type SocialLink = {
    label: string;
    href: string;
    icon: IconType;
};

export const socialLinks: SocialLink[] = [
    { label: "YouTube", href: "https://youtube.com/@viditcode", icon: FaYoutube },
    { label: "GitHub", href: "https://github.com/viditcode", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/vidit-agarwal-code", icon: FaLinkedin },
    { label: "Instagram", href: "https://instagram.com/viditcode", icon: FaInstagram },
    { label: "Facebook", href: "https://facebook.com/viditcode", icon: FaFacebook },
    { label: "X", href: "https://x.com/viditcode", icon: FaXTwitter },
    { label: "Threads", href: "https://threads.net/@viditcode", icon: FaThreads },
];