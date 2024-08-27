import * as http from "http";

import {
  getListEpisodes,
  getFilterEpisodes,
  addEpisodeRating,
  addEpisodeComment
} from "./controllers/podscasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.ESPISODE) {
    await getFilterEpisodes(request, response);
  }

  if (request.method === HttpMethod.POST && baseUrl === Routes.RATING) {
    await addEpisodeRating(request, response);
  }

  if (request.method === HttpMethod.POST && baseUrl === Routes.COMMENT) {
    await addEpisodeComment(request, response);
  }
};
