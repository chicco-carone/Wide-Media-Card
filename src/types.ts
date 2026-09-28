export type HomeAssistant = {
  states: Record<string, HassEntity>;
  callService: (
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: Record<string, unknown>,
    notifyOnError?: boolean,
    returnResponse?: boolean,
  ) => Promise<unknown>;
};

export type HassEntity = {
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
};

export type CardConfig = {
  entity: string;
  show_queue?: boolean;
  queue_limit?: number;
  queue_visible_items?: number;
};

export type QueueItem = {
  name: string;
  media_item?: {
    name?: string;
    image?: string;
    artists?: Array<{ name?: string }>;
    album?: { name?: string };
  } | null;
};

export type QueueDetails = {
  name: string;
  items: number;
  next_item?: QueueItem | null;
};

export type MassQueueItem = {
  queue_item_id: string;
  media_title: string;
  media_album_name?: string;
  media_artist?: string;
  media_content_id?: string;
  media_image?: string;
  local_image_encoded?: string;
};
