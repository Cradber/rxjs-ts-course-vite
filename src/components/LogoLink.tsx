import {h} from "preact";

interface Props {
    href: string;
    src: string;
    alt: string;
    className?: string;
}

export const LogoLink = ({href, src, className, alt}: Props) => (
    <a href={href} target="_blank">
        <img src={src} className={className??''} alt={alt}/>
    </a>
)
