import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repositoryPodcastAddComment } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

const { URLSearchParams } = require('url');

export const serviceAddEpisodeComment = async (
    url: string | undefined
): Promise<PodcastTransferModel> => {
    //define contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //busco os dados
    const params = new URLSearchParams(url?.split("?")[1]);

    const videoId = params.get("v") || "";
    const user = params.get("u") || "";
    const comment = params.get("c") || "";  

    const data = await repositoryPodcastAddComment(videoId, user, comment);

    //verifico o tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };

    return responseFormat;
};