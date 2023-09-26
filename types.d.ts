declare module 'tags' {
    export interface TagsProps {
        topic: string;
        relevance_score: string
    }
}

declare module 'news' {
    export interface NewsProps {
        title: string,
        summary: string,
        url: string,
        banner_image: string,
        topics: TagsProps[],
    }
}

declare module 'card' {
    export interface CardsProps {
        title: string;
        description: string;
        link: string;
        target?: string;
        tags?: TagsProps[];
        image?: string;
    }
}

declare module 'answer' {
    export interface AnswerProps {
        answerByUser?: string,
        answer?: string,
        value?: number
    }
}

declare module 'video' {
    export interface ModalVideoProps {
        thumb: StaticImageData
        thumbWidth: number
        thumbHeight: number
        thumbAlt: string
        video: string
        videoWidth: number
        videoHeight: number
    }
}

declare module 'tweet' {
    export interface TweetProps {
        id: string;
    }
}

declare module 'preguntas' {
    export interface PreguntasProps {
        pregunta: string;
        opcion1: string
        opcion2: string
        opcion3: string,
    }
}

declare module 'perfilInversorProvider' {
    export interface PerfilInversorProviderProps {
        children: ReactNode;
    }
}

// declare module 'perfilInversor' {
//     export interface PerfilInversorProps {
//         perfilInversor: string;
//         setPerfilInversor: React.Dispatch<React.SetStateAction<string>>;
//     }
// }





