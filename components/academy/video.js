import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const YoutubeEmbed = ({ embedId, title, description }) => (
    <>
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>

        <Link href={`https://youtu.be/${embedId}`} target='_blank'>
            <div className=" max-w-md rounded overflow-hidden shadow-lg  hover:bg-purple-800 ">
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2 flex items-center justify-center">{title}</div>
                    <p className="text-withe text-base text-center">{description}</p>
                </div>
            </div>
        </Link>
    </>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;