import React from "react";
import PropTypes from "prop-types";

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

        <div className="flex items-center justify-center">
            <h4 className="h4 mb-2">{title}</h4>
        </div>
        <div>
            <p className="text-lg text-gray-400 text-center">{description}</p>
        </div>

    </>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;