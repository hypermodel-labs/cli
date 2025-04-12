
export const meta = {
  info: {
    title: 'OpenAI API',
    description:
      'The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.',
    version: '2.3.0',
    termsOfService: 'https://openai.com/policies/terms-of-use',
    contact: {name: 'OpenAI Support', url: 'https://help.openai.com/'},
    license: {
      name: 'MIT',
      url: 'https://github.com/openai/openai-openapi/blob/master/LICENSE',
    },
  },
  servers: [{url: 'https://api.openai.com/v1'}],
} as const

export interface paths {
  '/assistants': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of assistants. */
    get: operations['listAssistants']
    put?: never
    /** Create an assistant with a model and instructions. */
    post: operations['createAssistant']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/assistants/{assistant_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves an assistant. */
    get: operations['getAssistant']
    put?: never
    /** Modifies an assistant. */
    post: operations['modifyAssistant']
    /** Delete an assistant. */
    delete: operations['deleteAssistant']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/audio/speech': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Generates audio from the input text. */
    post: operations['createSpeech']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/audio/transcriptions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Transcribes audio into the input language. */
    post: operations['createTranscription']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/audio/translations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Translates audio into English. */
    post: operations['createTranslation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/batches': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List your organization's batches. */
    get: operations['listBatches']
    put?: never
    /** Creates and executes a batch from an uploaded file of requests */
    post: operations['createBatch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/batches/{batch_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a batch. */
    get: operations['retrieveBatch']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/batches/{batch_id}/cancel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file. */
    post: operations['cancelBatch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/chat/completions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List stored Chat Completions. Only Chat Completions that have been stored
     *     with the `store` parameter set to `true` will be returned.
     *      */
    get: operations['listChatCompletions']
    put?: never
    /** **Starting a new project?** We recommend trying [Responses](/docs/api-reference/responses)
     *     to take advantage of the latest OpenAI platform features. Compare
     *     [Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-mode=responses).
     *
     *     ---
     *
     *     Creates a model response for the given chat conversation. Learn more in the
     *     [text generation](/docs/guides/text-generation), [vision](/docs/guides/vision),
     *     and [audio](/docs/guides/audio) guides.
     *
     *     Parameter support can differ depending on the model used to generate the
     *     response, particularly for newer reasoning models. Parameters that are only
     *     supported for reasoning models are noted below. For the current state of
     *     unsupported parameters in reasoning models,
     *     [refer to the reasoning guide](/docs/guides/reasoning).
     *      */
    post: operations['createChatCompletion']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/chat/completions/{completion_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get a stored chat completion. Only Chat Completions that have been created
     *     with the `store` parameter set to `true` will be returned.
     *      */
    get: operations['getChatCompletion']
    put?: never
    /** Modify a stored chat completion. Only Chat Completions that have been
     *     created with the `store` parameter set to `true` can be modified. Currently,
     *     the only supported modification is to update the `metadata` field.
     *      */
    post: operations['updateChatCompletion']
    /** Delete a stored chat completion. Only Chat Completions that have been
     *     created with the `store` parameter set to `true` can be deleted.
     *      */
    delete: operations['deleteChatCompletion']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/chat/completions/{completion_id}/messages': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get the messages in a stored chat completion. Only Chat Completions that
     *     have been created with the `store` parameter set to `true` will be
     *     returned.
     *      */
    get: operations['getChatCompletionMessages']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/completions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Creates a completion for the provided prompt and parameters. */
    post: operations['createCompletion']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/embeddings': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Creates an embedding vector representing the input text. */
    post: operations['createEmbedding']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of files. */
    get: operations['listFiles']
    put?: never
    /** Upload a file that can be used across various endpoints. Individual files can be up to 512 MB, and the size of all files uploaded by one organization can be up to 100 GB.
     *
     *     The Assistants API supports files up to 2 million tokens and of specific file types. See the [Assistants Tools guide](/docs/assistants/tools) for details.
     *
     *     The Fine-tuning API only supports `.jsonl` files. The input also has certain required formats for fine-tuning [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) models.
     *
     *     The Batch API only supports `.jsonl` files up to 200 MB in size. The input also has a specific required [format](/docs/api-reference/batch/request-input).
     *
     *     Please [contact us](https://help.openai.com/) if you need to increase these storage limits.
     *      */
    post: operations['createFile']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{file_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns information about a specific file. */
    get: operations['retrieveFile']
    put?: never
    post?: never
    /** Delete a file. */
    delete: operations['deleteFile']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/files/{file_id}/content': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns the contents of the specified file. */
    get: operations['downloadFile']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fine_tuning/checkpoints/{permission_id}/permissions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** **NOTE:** This endpoint requires an [admin API key](../admin-api-keys).
     *
     *     Organization owners can use this endpoint to view all permissions for a fine-tuned model checkpoint.
     *      */
    get: operations['listFineTuningCheckpointPermissions']
    put?: never
    /** **NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys).
     *
     *     This enables organization owners to share fine-tuned models with other projects in their organization.
     *      */
    post: operations['createFineTuningCheckpointPermission']
    /** **NOTE:** This endpoint requires an [admin API key](../admin-api-keys).
     *
     *     Organization owners can use this endpoint to delete a permission for a fine-tuned model checkpoint.
     *      */
    delete: operations['deleteFineTuningCheckpointPermission']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fine_tuning/jobs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List your organization's fine-tuning jobs
     *      */
    get: operations['listPaginatedFineTuningJobs']
    put?: never
    /** Creates a fine-tuning job which begins the process of creating a new model from a given dataset.
     *
     *     Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.
     *
     *     [Learn more about fine-tuning](/docs/guides/fine-tuning)
     *      */
    post: operations['createFineTuningJob']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fine_tuning/jobs/{fine_tuning_job_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get info about a fine-tuning job.
     *
     *     [Learn more about fine-tuning](/docs/guides/fine-tuning)
     *      */
    get: operations['retrieveFineTuningJob']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fine_tuning/jobs/{fine_tuning_job_id}/cancel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Immediately cancel a fine-tune job.
     *      */
    post: operations['cancelFineTuningJob']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fine_tuning/jobs/{fine_tuning_job_id}/checkpoints': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List checkpoints for a fine-tuning job.
     *      */
    get: operations['listFineTuningJobCheckpoints']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fine_tuning/jobs/{fine_tuning_job_id}/events': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get status updates for a fine-tuning job.
     *      */
    get: operations['listFineTuningEvents']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/images/edits': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Creates an edited or extended image given an original image and a prompt. */
    post: operations['createImageEdit']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/images/generations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Creates an image given a prompt. */
    post: operations['createImage']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/images/variations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Creates a variation of a given image. */
    post: operations['createImageVariation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/models': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Lists the currently available models, and provides basic information about each one such as the owner and availability. */
    get: operations['listModels']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/models/{model}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a model instance, providing basic information about the model such as the owner and permissioning. */
    get: operations['retrieveModel']
    put?: never
    post?: never
    /** Delete a fine-tuned model. You must have the Owner role in your organization to delete a model. */
    delete: operations['deleteModel']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/moderations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Classifies if text and/or image inputs are potentially harmful. Learn
     *     more in the [moderation guide](/docs/guides/moderation).
     *      */
    post: operations['createModeration']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/admin_api_keys': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List organization API keys
     * @description Retrieve a paginated list of organization admin API keys.
     */
    get: operations['admin-api-keys-list']
    put?: never
    /**
     * Create an organization admin API key
     * @description Create a new admin-level API key for the organization.
     */
    post: operations['admin-api-keys-create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/admin_api_keys/{key_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a single organization API key
     * @description Get details for a specific organization API key by its ID.
     */
    get: operations['admin-api-keys-get']
    put?: never
    post?: never
    /**
     * Delete an organization admin API key
     * @description Delete the specified admin API key.
     */
    delete: operations['admin-api-keys-delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/audit_logs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List user actions and configuration changes within this organization. */
    get: operations['list-audit-logs']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/costs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get costs details for the organization. */
    get: operations['usage-costs']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/invites': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of invites in the organization. */
    get: operations['list-invites']
    put?: never
    /** Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization. */
    post: operations['inviteUser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/invites/{invite_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves an invite. */
    get: operations['retrieve-invite']
    put?: never
    post?: never
    /** Delete an invite. If the invite has already been accepted, it cannot be deleted. */
    delete: operations['delete-invite']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of projects. */
    get: operations['list-projects']
    put?: never
    /** Create a new project in the organization. Projects can be created and archived, but cannot be deleted. */
    post: operations['create-project']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a project. */
    get: operations['retrieve-project']
    put?: never
    /** Modifies a project in the organization. */
    post: operations['modify-project']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/api_keys': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of API keys in the project. */
    get: operations['list-project-api-keys']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/api_keys/{key_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves an API key in the project. */
    get: operations['retrieve-project-api-key']
    put?: never
    post?: never
    /** Deletes an API key from the project. */
    delete: operations['delete-project-api-key']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/archive': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Archives a project in the organization. Archived projects cannot be used or updated. */
    post: operations['archive-project']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/rate_limits': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns the rate limits per model for a project. */
    get: operations['list-project-rate-limits']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/rate_limits/{rate_limit_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Updates a project rate limit. */
    post: operations['update-project-rate-limits']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/service_accounts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of service accounts in the project. */
    get: operations['list-project-service-accounts']
    put?: never
    /** Creates a new service account in the project. This also returns an unredacted API key for the service account. */
    post: operations['create-project-service-account']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/service_accounts/{service_account_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a service account in the project. */
    get: operations['retrieve-project-service-account']
    put?: never
    post?: never
    /** Deletes a service account from the project. */
    delete: operations['delete-project-service-account']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/users': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of users in the project. */
    get: operations['list-project-users']
    put?: never
    /** Adds a user to the project. Users must already be members of the organization to be added to a project. */
    post: operations['create-project-user']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/projects/{project_id}/users/{user_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a user in the project. */
    get: operations['retrieve-project-user']
    put?: never
    /** Modifies a user's role in the project. */
    post: operations['modify-project-user']
    /** Deletes a user from the project. */
    delete: operations['delete-project-user']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/usage/audio_speeches': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get audio speeches usage details for the organization. */
    get: operations['usage-audio-speeches']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/usage/audio_transcriptions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get audio transcriptions usage details for the organization. */
    get: operations['usage-audio-transcriptions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/usage/code_interpreter_sessions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get code interpreter sessions usage details for the organization. */
    get: operations['usage-code-interpreter-sessions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/usage/completions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get completions usage details for the organization. */
    get: operations['usage-completions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/usage/embeddings': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get embeddings usage details for the organization. */
    get: operations['usage-embeddings']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/usage/images': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get images usage details for the organization. */
    get: operations['usage-images']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/usage/moderations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get moderations usage details for the organization. */
    get: operations['usage-moderations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/usage/vector_stores': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get vector stores usage details for the organization. */
    get: operations['usage-vector-stores']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/users': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Lists all of the users in the organization. */
    get: operations['list-users']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization/users/{user_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a user by their identifier. */
    get: operations['retrieve-user']
    put?: never
    /** Modifies a user's role in the organization. */
    post: operations['modify-user']
    /** Deletes a user from the organization. */
    delete: operations['delete-user']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/realtime/sessions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Create an ephemeral API token for use in client-side applications with the
     *     Realtime API. Can be configured with the same session parameters as the
     *     `session.update` client event.
     *
     *     It responds with a session object, plus a `client_secret` key which contains
     *     a usable ephemeral API token that can be used to authenticate browser clients
     *     for the Realtime API.
     *      */
    post: operations['create-realtime-session']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/realtime/transcription_sessions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Create an ephemeral API token for use in client-side applications with the
     *     Realtime API specifically for realtime transcriptions.
     *     Can be configured with the same session parameters as the `transcription_session.update` client event.
     *
     *     It responds with a session object, plus a `client_secret` key which contains
     *     a usable ephemeral API token that can be used to authenticate browser clients
     *     for the Realtime API.
     *      */
    post: operations['create-realtime-transcription-session']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/responses': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Creates a model response. Provide [text](/docs/guides/text) or
     *     [image](/docs/guides/images) inputs to generate [text](/docs/guides/text)
     *     or [JSON](/docs/guides/structured-outputs) outputs. Have the model call
     *     your own [custom code](/docs/guides/function-calling) or use built-in
     *     [tools](/docs/guides/tools) like [web search](/docs/guides/tools-web-search)
     *     or [file search](/docs/guides/tools-file-search) to use your own data
     *     as input for the model's response.
     *      */
    post: operations['createResponse']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/responses/{response_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a model response with the given ID.
     *      */
    get: operations['getResponse']
    put?: never
    post?: never
    /** Deletes a model response with the given ID.
     *      */
    delete: operations['deleteResponse']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/responses/{response_id}/input_items': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of input items for a given response. */
    get: operations['listInputItems']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Create a thread. */
    post: operations['createThread']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/runs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Create a thread and run it in one request. */
    post: operations['createThreadAndRun']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a thread. */
    get: operations['getThread']
    put?: never
    /** Modifies a thread. */
    post: operations['modifyThread']
    /** Delete a thread. */
    delete: operations['deleteThread']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}/messages': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of messages for a given thread. */
    get: operations['listMessages']
    put?: never
    /** Create a message. */
    post: operations['createMessage']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}/messages/{message_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieve a message. */
    get: operations['getMessage']
    put?: never
    /** Modifies a message. */
    post: operations['modifyMessage']
    /** Deletes a message. */
    delete: operations['deleteMessage']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}/runs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of runs belonging to a thread. */
    get: operations['listRuns']
    put?: never
    /** Create a run. */
    post: operations['createRun']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}/runs/{run_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a run. */
    get: operations['getRun']
    put?: never
    /** Modifies a run. */
    post: operations['modifyRun']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}/runs/{run_id}/cancel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Cancels a run that is `in_progress`. */
    post: operations['cancelRun']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}/runs/{run_id}/steps': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of run steps belonging to a run. */
    get: operations['listRunSteps']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}/runs/{run_id}/steps/{step_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a run step. */
    get: operations['getRunStep']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/threads/{thread_id}/runs/{run_id}/submit_tool_outputs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.
     *      */
    post: operations['submitToolOuputsToRun']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/uploads': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Creates an intermediate [Upload](/docs/api-reference/uploads/object) object
     *     that you can add [Parts](/docs/api-reference/uploads/part-object) to.
     *     Currently, an Upload can accept at most 8 GB in total and expires after an
     *     hour after you create it.
     *
     *     Once you complete the Upload, we will create a
     *     [File](/docs/api-reference/files/object) object that contains all the parts
     *     you uploaded. This File is usable in the rest of our platform as a regular
     *     File object.
     *
     *     For certain `purpose` values, the correct `mime_type` must be specified.
     *     Please refer to documentation for the
     *     [supported MIME types for your use case](/docs/assistants/tools/file-search#supported-files).
     *
     *     For guidance on the proper filename extensions for each purpose, please
     *     follow the documentation on [creating a
     *     File](/docs/api-reference/files/create).
     *      */
    post: operations['createUpload']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/uploads/{upload_id}/cancel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Cancels the Upload. No Parts may be added after an Upload is cancelled.
     *      */
    post: operations['cancelUpload']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/uploads/{upload_id}/complete': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Completes the [Upload](/docs/api-reference/uploads/object).
     *
     *     Within the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform.
     *
     *     You can specify the order of the Parts by passing in an ordered list of the Part IDs.
     *
     *     The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed.
     *      */
    post: operations['completeUpload']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/uploads/{upload_id}/parts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload.
     *
     *     Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB.
     *
     *     It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you [complete the Upload](/docs/api-reference/uploads/complete).
     *      */
    post: operations['addUploadPart']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of vector stores. */
    get: operations['listVectorStores']
    put?: never
    /** Create a vector store. */
    post: operations['createVectorStore']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a vector store. */
    get: operations['getVectorStore']
    put?: never
    /** Modifies a vector store. */
    post: operations['modifyVectorStore']
    /** Delete a vector store. */
    delete: operations['deleteVectorStore']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}/file_batches': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Create a vector store file batch. */
    post: operations['createVectorStoreFileBatch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}/file_batches/{batch_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a vector store file batch. */
    get: operations['getVectorStoreFileBatch']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
    post: operations['cancelVectorStoreFileBatch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}/file_batches/{batch_id}/files': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of vector store files in a batch. */
    get: operations['listFilesInVectorStoreBatch']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}/files': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Returns a list of vector store files. */
    get: operations['listVectorStoreFiles']
    put?: never
    /** Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object). */
    post: operations['createVectorStoreFile']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}/files/{file_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieves a vector store file. */
    get: operations['getVectorStoreFile']
    put?: never
    /** Update attributes on a vector store file. */
    post: operations['updateVectorStoreFileAttributes']
    /** Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint. */
    delete: operations['deleteVectorStoreFile']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}/files/{file_id}/content': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Retrieve the parsed contents of a vector store file. */
    get: operations['retrieveVectorStoreFileContent']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/vector_stores/{vector_store_id}/search': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Search a vector store for relevant chunks based on a query and file attributes filter. */
    post: operations['searchVectorStore']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    AddUploadPartRequest: {
      /**
       * Format: binary
       * @description The chunk of bytes for this Part.
       *
       */
      data: string
    }
    AdminApiKey: {
      /** @example organization.admin_api_key */
      object?: string
      /** @example key_abc */
      id?: string
      /** @example Administration Key */
      name?: string
      /** @example sk-admin...def */
      redacted_value?: string
      /** @example sk-admin-1234abcd */
      value?: string
      /**
       * Format: int64
       * @example 1711471533
       */
      created_at?: number
      owner?: {
        /** @example service_account */
        type?: string
        /** @example sa_456 */
        id?: string
        /** @example My Service Account */
        name?: string
        /**
         * Format: int64
         * @example 1711471533
         */
        created_at?: number
        /** @example member */
        role?: string
      }
    }
    Annotation:
      | components['schemas']['FileCitation']
      | components['schemas']['UrlCitation']
      | components['schemas']['FilePath']
    ApiKeyList: {
      /** @example list */
      object?: string
      data?: components['schemas']['AdminApiKey'][]
      /** @example false */
      has_more?: boolean
      /** @example key_abc */
      first_id?: string
      /** @example key_xyz */
      last_id?: string
    }
    /**
     * Assistant
     * @description Represents an `assistant` that can call the model and use tools.
     */
    AssistantObject: {
      /** @description The identifier, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `assistant`.
       * @enum {string}
       */
      object: 'assistant'
      /** @description The Unix timestamp (in seconds) for when the assistant was created. */
      created_at: number
      /** @description The name of the assistant. The maximum length is 256 characters.
       *      */
      name: string | null
      /** @description The description of the assistant. The maximum length is 512 characters.
       *      */
      description: string | null
      /** @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
       *      */
      model: string
      /** @description The system instructions that the assistant uses. The maximum length is 256,000 characters.
       *      */
      instructions: string | null
      /**
       * @description A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
       *
       * @default []
       */
      tools: (
        | components['schemas']['AssistantToolsCode']
        | components['schemas']['AssistantToolsFileSearch']
        | components['schemas']['AssistantToolsFunction']
      )[]
      /** @description A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
       *      */
      tool_resources?: {
        code_interpreter?: {
          /**
           * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter`` tool. There can be a maximum of 20 files associated with the tool.
           *
           * @default []
           */
          file_ids: string[]
        }
        file_search?: {
          /** @description The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           *      */
          vector_store_ids?: string[]
        }
      } | null
      metadata: components['schemas']['Metadata']
      /**
       * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
       *
       * @default 1
       * @example 1
       */
      temperature: number
      /**
       * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
       *
       *     We generally recommend altering this or temperature but not both.
       *
       * @default 1
       * @example 1
       */
      top_p: number
      response_format?: components['schemas']['AssistantsApiResponseFormatOption']
    }
    /** @description Represents an event emitted when streaming a Run.
     *
     *     Each event in a server-sent events stream has an `event` and `data` property:
     *
     *     ```
     *     event: thread.created
     *     data: {"id": "thread_123", "object": "thread", ...}
     *     ```
     *
     *     We emit events whenever a new object is created, transitions to a new state, or is being
     *     streamed in parts (deltas). For example, we emit `thread.run.created` when a new run
     *     is created, `thread.run.completed` when a run completes, and so on. When an Assistant chooses
     *     to create a message during a run, we emit a `thread.message.created event`, a
     *     `thread.message.in_progress` event, many `thread.message.delta` events, and finally a
     *     `thread.message.completed` event.
     *
     *     We may add additional events over time, so we recommend handling unknown events gracefully
     *     in your code. See the [Assistants API quickstart](/docs/assistants/overview) to learn how to
     *     integrate the Assistants API with streaming.
     *      */
    AssistantStreamEvent:
      | components['schemas']['ThreadStreamEvent']
      | components['schemas']['RunStreamEvent']
      | components['schemas']['RunStepStreamEvent']
      | components['schemas']['MessageStreamEvent']
      | components['schemas']['ErrorEvent']
      | components['schemas']['DoneEvent']
    /** @enum {string} */
    AssistantSupportedModels:
      | 'o3-mini'
      | 'o3-mini-2025-01-31'
      | 'o1'
      | 'o1-2024-12-17'
      | 'gpt-4o'
      | 'gpt-4o-2024-11-20'
      | 'gpt-4o-2024-08-06'
      | 'gpt-4o-2024-05-13'
      | 'gpt-4o-mini'
      | 'gpt-4o-mini-2024-07-18'
      | 'gpt-4.5-preview'
      | 'gpt-4.5-preview-2025-02-27'
      | 'gpt-4-turbo'
      | 'gpt-4-turbo-2024-04-09'
      | 'gpt-4-0125-preview'
      | 'gpt-4-turbo-preview'
      | 'gpt-4-1106-preview'
      | 'gpt-4-vision-preview'
      | 'gpt-4'
      | 'gpt-4-0314'
      | 'gpt-4-0613'
      | 'gpt-4-32k'
      | 'gpt-4-32k-0314'
      | 'gpt-4-32k-0613'
      | 'gpt-3.5-turbo'
      | 'gpt-3.5-turbo-16k'
      | 'gpt-3.5-turbo-0613'
      | 'gpt-3.5-turbo-1106'
      | 'gpt-3.5-turbo-0125'
      | 'gpt-3.5-turbo-16k-0613'
    /** Code interpreter tool */
    AssistantToolsCode: {
      /**
       * @description The type of tool being defined: `code_interpreter`
       * @enum {string}
       */
      type: 'code_interpreter'
    }
    /** FileSearch tool */
    AssistantToolsFileSearch: {
      /**
       * @description The type of tool being defined: `file_search`
       * @enum {string}
       */
      type: 'file_search'
      /** @description Overrides for the file search tool. */
      file_search?: {
        /** @description The maximum number of results the file search tool should output. The default is 20 for `gpt-4*` models and 5 for `gpt-3.5-turbo`. This number should be between 1 and 50 inclusive.
         *
         *     Note that the file search tool may output fewer than `max_num_results` results. See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
         *      */
        max_num_results?: number
        ranking_options?: components['schemas']['FileSearchRankingOptions']
      }
    }
    /** FileSearch tool */
    AssistantToolsFileSearchTypeOnly: {
      /**
       * @description The type of tool being defined: `file_search`
       * @enum {string}
       */
      type: 'file_search'
    }
    /** Function tool */
    AssistantToolsFunction: {
      /**
       * @description The type of tool being defined: `function`
       * @enum {string}
       */
      type: 'function'
      function: components['schemas']['FunctionObject']
    }
    /** @description Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
     *
     *     Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
     *
     *     Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
     *
     *     **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
     *      */
    AssistantsApiResponseFormatOption:
      | 'auto'
      | components['schemas']['ResponseFormatText']
      | components['schemas']['ResponseFormatJsonObject']
      | components['schemas']['ResponseFormatJsonSchema']
    /** @description Controls which (if any) tool is called by the model.
     *     `none` means the model will not call any tools and instead generates a message.
     *     `auto` is the default value and means the model can pick between generating a message or calling one or more tools.
     *     `required` means the model must call one or more tools before responding to the user.
     *     Specifying a particular tool like `{"type": "file_search"}` or `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
     *      */
    AssistantsApiToolChoiceOption:
      | ('none' | 'auto' | 'required')
      | components['schemas']['AssistantsNamedToolChoice']
    /** @description Specifies a tool the model should use. Use to force the model to call a specific tool. */
    AssistantsNamedToolChoice: {
      /**
       * @description The type of the tool. If type is `function`, the function name must be set
       * @enum {string}
       */
      type: 'function' | 'code_interpreter' | 'file_search'
      function?: {
        /** @description The name of the function to call. */
        name: string
      }
    }
    /**
     * @description The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`. For `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`, the only supported format is `json`.
     *
     * @default json
     * @enum {string}
     */
    AudioResponseFormat: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt'
    /** @description A log of a user action or configuration change within this organization. */
    AuditLog: {
      /** @description The ID of this log. */
      id: string
      type: components['schemas']['AuditLogEventType']
      /** @description The Unix timestamp (in seconds) of the event. */
      effective_at: number
      /** @description The project that the action was scoped to. Absent for actions not scoped to projects. */
      project?: {
        /** @description The project ID. */
        id?: string
        /** @description The project title. */
        name?: string
      }
      actor: components['schemas']['AuditLogActor']
      /** @description The details for events with this `type`. */
      'api_key.created'?: {
        /** @description The tracking ID of the API key. */
        id?: string
        /** @description The payload used to create the API key. */
        data?: {
          /** @description A list of scopes allowed for the API key, e.g. `["api.model.request"]` */
          scopes?: string[]
        }
      }
      /** @description The details for events with this `type`. */
      'api_key.updated'?: {
        /** @description The tracking ID of the API key. */
        id?: string
        /** @description The payload used to update the API key. */
        changes_requested?: {
          /** @description A list of scopes allowed for the API key, e.g. `["api.model.request"]` */
          scopes?: string[]
        }
      }
      /** @description The details for events with this `type`. */
      'api_key.deleted'?: {
        /** @description The tracking ID of the API key. */
        id?: string
      }
      /** @description The details for events with this `type`. */
      'invite.sent'?: {
        /** @description The ID of the invite. */
        id?: string
        /** @description The payload used to create the invite. */
        data?: {
          /** @description The email invited to the organization. */
          email?: string
          /** @description The role the email was invited to be. Is either `owner` or `member`. */
          role?: string
        }
      }
      /** @description The details for events with this `type`. */
      'invite.accepted'?: {
        /** @description The ID of the invite. */
        id?: string
      }
      /** @description The details for events with this `type`. */
      'invite.deleted'?: {
        /** @description The ID of the invite. */
        id?: string
      }
      /** @description The details for events with this `type`. */
      'login.failed'?: {
        /** @description The error code of the failure. */
        error_code?: string
        /** @description The error message of the failure. */
        error_message?: string
      }
      /** @description The details for events with this `type`. */
      'logout.failed'?: {
        /** @description The error code of the failure. */
        error_code?: string
        /** @description The error message of the failure. */
        error_message?: string
      }
      /** @description The details for events with this `type`. */
      'organization.updated'?: {
        /** @description The organization ID. */
        id?: string
        /** @description The payload used to update the organization settings. */
        changes_requested?: {
          /** @description The organization title. */
          title?: string
          /** @description The organization description. */
          description?: string
          /** @description The organization name. */
          name?: string
          settings?: {
            /** @description Visibility of the threads page which shows messages created with the Assistants API and Playground. One of `ANY_ROLE`, `OWNERS`, or `NONE`. */
            threads_ui_visibility?: string
            /** @description Visibility of the usage dashboard which shows activity and costs for your organization. One of `ANY_ROLE` or `OWNERS`. */
            usage_dashboard_visibility?: string
          }
        }
      }
      /** @description The details for events with this `type`. */
      'project.created'?: {
        /** @description The project ID. */
        id?: string
        /** @description The payload used to create the project. */
        data?: {
          /** @description The project name. */
          name?: string
          /** @description The title of the project as seen on the dashboard. */
          title?: string
        }
      }
      /** @description The details for events with this `type`. */
      'project.updated'?: {
        /** @description The project ID. */
        id?: string
        /** @description The payload used to update the project. */
        changes_requested?: {
          /** @description The title of the project as seen on the dashboard. */
          title?: string
        }
      }
      /** @description The details for events with this `type`. */
      'project.archived'?: {
        /** @description The project ID. */
        id?: string
      }
      /** @description The details for events with this `type`. */
      'rate_limit.updated'?: {
        /** @description The rate limit ID */
        id?: string
        /** @description The payload used to update the rate limits. */
        changes_requested?: {
          /** @description The maximum requests per minute. */
          max_requests_per_1_minute?: number
          /** @description The maximum tokens per minute. */
          max_tokens_per_1_minute?: number
          /** @description The maximum images per minute. Only relevant for certain models. */
          max_images_per_1_minute?: number
          /** @description The maximum audio megabytes per minute. Only relevant for certain models. */
          max_audio_megabytes_per_1_minute?: number
          /** @description The maximum requests per day. Only relevant for certain models. */
          max_requests_per_1_day?: number
          /** @description The maximum batch input tokens per day. Only relevant for certain models. */
          batch_1_day_max_input_tokens?: number
        }
      }
      /** @description The details for events with this `type`. */
      'rate_limit.deleted'?: {
        /** @description The rate limit ID */
        id?: string
      }
      /** @description The details for events with this `type`. */
      'service_account.created'?: {
        /** @description The service account ID. */
        id?: string
        /** @description The payload used to create the service account. */
        data?: {
          /** @description The role of the service account. Is either `owner` or `member`. */
          role?: string
        }
      }
      /** @description The details for events with this `type`. */
      'service_account.updated'?: {
        /** @description The service account ID. */
        id?: string
        /** @description The payload used to updated the service account. */
        changes_requested?: {
          /** @description The role of the service account. Is either `owner` or `member`. */
          role?: string
        }
      }
      /** @description The details for events with this `type`. */
      'service_account.deleted'?: {
        /** @description The service account ID. */
        id?: string
      }
      /** @description The details for events with this `type`. */
      'user.added'?: {
        /** @description The user ID. */
        id?: string
        /** @description The payload used to add the user to the project. */
        data?: {
          /** @description The role of the user. Is either `owner` or `member`. */
          role?: string
        }
      }
      /** @description The details for events with this `type`. */
      'user.updated'?: {
        /** @description The project ID. */
        id?: string
        /** @description The payload used to update the user. */
        changes_requested?: {
          /** @description The role of the user. Is either `owner` or `member`. */
          role?: string
        }
      }
      /** @description The details for events with this `type`. */
      'user.deleted'?: {
        /** @description The user ID. */
        id?: string
      }
    }
    /** @description The actor who performed the audit logged action. */
    AuditLogActor: {
      /**
       * @description The type of actor. Is either `session` or `api_key`.
       * @enum {string}
       */
      type?: 'session' | 'api_key'
      session?: components['schemas']['AuditLogActorSession']
      api_key?: components['schemas']['AuditLogActorApiKey']
    }
    /** @description The API Key used to perform the audit logged action. */
    AuditLogActorApiKey: {
      /** @description The tracking id of the API key. */
      id?: string
      /**
       * @description The type of API key. Can be either `user` or `service_account`.
       * @enum {string}
       */
      type?: 'user' | 'service_account'
      user?: components['schemas']['AuditLogActorUser']
      service_account?: components['schemas']['AuditLogActorServiceAccount']
    }
    /** @description The service account that performed the audit logged action. */
    AuditLogActorServiceAccount: {
      /** @description The service account id. */
      id?: string
    }
    /** @description The session in which the audit logged action was performed. */
    AuditLogActorSession: {
      user?: components['schemas']['AuditLogActorUser']
      /** @description The IP address from which the action was performed. */
      ip_address?: string
    }
    /** @description The user who performed the audit logged action. */
    AuditLogActorUser: {
      /** @description The user id. */
      id?: string
      /** @description The user email. */
      email?: string
    }
    /**
     * @description The event type.
     * @enum {string}
     */
    AuditLogEventType:
      | 'api_key.created'
      | 'api_key.updated'
      | 'api_key.deleted'
      | 'invite.sent'
      | 'invite.accepted'
      | 'invite.deleted'
      | 'login.succeeded'
      | 'login.failed'
      | 'logout.succeeded'
      | 'logout.failed'
      | 'organization.updated'
      | 'project.created'
      | 'project.updated'
      | 'project.archived'
      | 'service_account.created'
      | 'service_account.updated'
      | 'service_account.deleted'
      | 'rate_limit.updated'
      | 'rate_limit.deleted'
      | 'user.added'
      | 'user.updated'
      | 'user.deleted'
    /**
     * Auto Chunking Strategy
     * @description The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.
     */
    AutoChunkingStrategyRequestParam: {
      /**
       * @description Always `auto`.
       * @enum {string}
       */
      type: 'auto'
    }
    Batch: {
      id: string
      /**
       * @description The object type, which is always `batch`.
       * @enum {string}
       */
      object: 'batch'
      /** @description The OpenAI API endpoint used by the batch. */
      endpoint: string
      errors?: {
        /** @description The object type, which is always `list`. */
        object?: string
        data?: {
          /** @description An error code identifying the error type. */
          code?: string
          /** @description A human-readable message providing more details about the error. */
          message?: string
          /** @description The name of the parameter that caused the error, if applicable. */
          param?: string | null
          /** @description The line number of the input file where the error occurred, if applicable. */
          line?: number | null
        }[]
      }
      /** @description The ID of the input file for the batch. */
      input_file_id: string
      /** @description The time frame within which the batch should be processed. */
      completion_window: string
      /**
       * @description The current status of the batch.
       * @enum {string}
       */
      status:
        | 'validating'
        | 'failed'
        | 'in_progress'
        | 'finalizing'
        | 'completed'
        | 'expired'
        | 'cancelling'
        | 'cancelled'
      /** @description The ID of the file containing the outputs of successfully executed requests. */
      output_file_id?: string
      /** @description The ID of the file containing the outputs of requests with errors. */
      error_file_id?: string
      /** @description The Unix timestamp (in seconds) for when the batch was created. */
      created_at: number
      /** @description The Unix timestamp (in seconds) for when the batch started processing. */
      in_progress_at?: number
      /** @description The Unix timestamp (in seconds) for when the batch will expire. */
      expires_at?: number
      /** @description The Unix timestamp (in seconds) for when the batch started finalizing. */
      finalizing_at?: number
      /** @description The Unix timestamp (in seconds) for when the batch was completed. */
      completed_at?: number
      /** @description The Unix timestamp (in seconds) for when the batch failed. */
      failed_at?: number
      /** @description The Unix timestamp (in seconds) for when the batch expired. */
      expired_at?: number
      /** @description The Unix timestamp (in seconds) for when the batch started cancelling. */
      cancelling_at?: number
      /** @description The Unix timestamp (in seconds) for when the batch was cancelled. */
      cancelled_at?: number
      /** @description The request counts for different statuses within the batch. */
      request_counts?: {
        /** @description Total number of requests in the batch. */
        total: number
        /** @description Number of requests that have been completed successfully. */
        completed: number
        /** @description Number of requests that have failed. */
        failed: number
      }
      metadata?: components['schemas']['Metadata']
    }
    /** @description The per-line object of the batch input file */
    BatchRequestInput: {
      /** @description A developer-provided per-request id that will be used to match outputs to inputs. Must be unique for each request in a batch. */
      custom_id?: string
      /**
       * @description The HTTP method to be used for the request. Currently only `POST` is supported.
       * @enum {string}
       */
      method?: 'POST'
      /** @description The OpenAI API relative URL to be used for the request. Currently `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. */
      url?: string
    }
    /** @description The per-line object of the batch output and error files */
    BatchRequestOutput: {
      id?: string
      /** @description A developer-provided per-request id that will be used to match outputs to inputs. */
      custom_id?: string
      response?: {
        /** @description The HTTP status code of the response */
        status_code?: number
        /** @description An unique identifier for the OpenAI API request. Please include this request ID when contacting support. */
        request_id?: string
        /** @description The JSON body of the response */
        body?: Record<string, never>
      } | null
      /** @description For requests that failed with a non-HTTP error, this will contain more information on the cause of the failure. */
      error?: {
        /** @description A machine-readable error code. */
        code?: string
        /** @description A human-readable error message. */
        message?: string
      } | null
    }
    CancelUploadRequest: Record<string, never>
    ChatCompletionDeleted: {
      /**
       * @description The type of object being deleted.
       * @enum {string}
       */
      object: 'chat.completion.deleted'
      /** @description The ID of the chat completion that was deleted. */
      id: string
      /** @description Whether the chat completion was deleted. */
      deleted: boolean
    }
    /** @description Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
     *      */
    ChatCompletionFunctionCallOption: {
      /** @description The name of the function to call. */
      name: string
    }
    /** @deprecated */
    ChatCompletionFunctions: {
      /** @description A description of what the function does, used by the model to choose when and how to call the function. */
      description?: string
      /** @description The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
      name: string
      parameters?: components['schemas']['FunctionParameters']
    }
    /**
     * ChatCompletionList
     * @description An object representing a list of Chat Completions.
     *
     */
    ChatCompletionList: {
      /**
       * @description The type of this object. It is always set to "list".
       *
       * @default list
       * @enum {string}
       */
      object: 'list'
      /** @description An array of chat completion objects.
       *      */
      data: components['schemas']['CreateChatCompletionResponse'][]
      /** @description The identifier of the first chat completion in the data array. */
      first_id: string
      /** @description The identifier of the last chat completion in the data array. */
      last_id: string
      /** @description Indicates whether there are more Chat Completions available. */
      has_more: boolean
    }
    /**
     * ChatCompletionMessageList
     * @description An object representing a list of chat completion messages.
     *
     */
    ChatCompletionMessageList: {
      /**
       * @description The type of this object. It is always set to "list".
       *
       * @default list
       * @enum {string}
       */
      object: 'list'
      /** @description An array of chat completion message objects.
       *      */
      data: (components['schemas']['ChatCompletionResponseMessage'] & {
        /** @description The identifier of the chat message. */
        id: string
      })[]
      /** @description The identifier of the first chat message in the data array. */
      first_id: string
      /** @description The identifier of the last chat message in the data array. */
      last_id: string
      /** @description Indicates whether there are more chat messages available. */
      has_more: boolean
    }
    ChatCompletionMessageToolCall: {
      /** @description The ID of the tool call. */
      id: string
      /**
       * @description The type of the tool. Currently, only `function` is supported.
       * @enum {string}
       */
      type: 'function'
      /** @description The function that the model called. */
      function: {
        /** @description The name of the function to call. */
        name: string
        /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
        arguments: string
      }
    }
    ChatCompletionMessageToolCallChunk: {
      index: number
      /** @description The ID of the tool call. */
      id?: string
      /**
       * @description The type of the tool. Currently, only `function` is supported.
       * @enum {string}
       */
      type?: 'function'
      function?: {
        /** @description The name of the function to call. */
        name?: string
        /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
        arguments?: string
      }
    }
    /** @description The tool calls generated by the model, such as function calls. */
    ChatCompletionMessageToolCalls: components['schemas']['ChatCompletionMessageToolCall'][]
    /** @description Output types that you would like the model to generate for this request.
     *     Most models are capable of generating text, which is the default:
     *
     *     `["text"]`
     *
     *     The `gpt-4o-audio-preview` model can also be used to [generate audio](/docs/guides/audio). To
     *     request that this model generate both text and audio responses, you can
     *     use:
     *
     *     `["text", "audio"]`
     *      */
    ChatCompletionModalities: ('text' | 'audio')[] | null
    /** @description Specifies a tool the model should use. Use to force the model to call a specific function. */
    ChatCompletionNamedToolChoice: {
      /**
       * @description The type of the tool. Currently, only `function` is supported.
       * @enum {string}
       */
      type: 'function'
      function: {
        /** @description The name of the function to call. */
        name: string
      }
    }
    /**
     * Assistant message
     * @description Messages sent by the model in response to user messages.
     *
     */
    ChatCompletionRequestAssistantMessage: {
      /** @description The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.
       *      */
      content?:
        | (
            | string
            | components['schemas']['ChatCompletionRequestAssistantMessageContentPart'][]
          )
        | null
      /** @description The refusal message by the assistant. */
      refusal?: string | null
      /**
       * @description The role of the messages author, in this case `assistant`.
       * @enum {string}
       */
      role: 'assistant'
      /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
      name?: string
      /** @description Data about a previous audio response from the model.
       *     [Learn more](/docs/guides/audio).
       *      */
      audio?: {
        /** @description Unique identifier for a previous audio response from the model.
         *      */
        id: string
      } | null
      tool_calls?: components['schemas']['ChatCompletionMessageToolCalls']
      /**
       * @deprecated
       * @description Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
       */
      function_call?: {
        /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
        arguments: string
        /** @description The name of the function to call. */
        name: string
      } | null
    }
    ChatCompletionRequestAssistantMessageContentPart:
      | components['schemas']['ChatCompletionRequestMessageContentPartText']
      | components['schemas']['ChatCompletionRequestMessageContentPartRefusal']
    /**
     * Developer message
     * @description Developer-provided instructions that the model should follow, regardless of
     *     messages sent by the user. With o1 models and newer, `developer` messages
     *     replace the previous `system` messages.
     *
     */
    ChatCompletionRequestDeveloperMessage: {
      /** @description The contents of the developer message. */
      content:
        | string
        | components['schemas']['ChatCompletionRequestMessageContentPartText'][]
      /**
       * @description The role of the messages author, in this case `developer`.
       * @enum {string}
       */
      role: 'developer'
      /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
      name?: string
    }
    /**
     * Function message
     * @deprecated
     */
    ChatCompletionRequestFunctionMessage: {
      /**
       * @description The role of the messages author, in this case `function`.
       * @enum {string}
       */
      role: 'function'
      /** @description The contents of the function message. */
      content: string | null
      /** @description The name of the function to call. */
      name: string
    }
    ChatCompletionRequestMessage:
      | components['schemas']['ChatCompletionRequestDeveloperMessage']
      | components['schemas']['ChatCompletionRequestSystemMessage']
      | components['schemas']['ChatCompletionRequestUserMessage']
      | components['schemas']['ChatCompletionRequestAssistantMessage']
      | components['schemas']['ChatCompletionRequestToolMessage']
      | components['schemas']['ChatCompletionRequestFunctionMessage']
    /**
     * Audio content part
     * @description Learn about [audio inputs](/docs/guides/audio).
     *
     */
    ChatCompletionRequestMessageContentPartAudio: {
      /**
       * @description The type of the content part. Always `input_audio`.
       * @enum {string}
       */
      type: 'input_audio'
      input_audio: {
        /** @description Base64 encoded audio data. */
        data: string
        /**
         * @description The format of the encoded audio data. Currently supports "wav" and "mp3".
         *
         * @enum {string}
         */
        format: 'wav' | 'mp3'
      }
    }
    /**
     * File content part
     * @description Learn about [file inputs](/docs/guides/text) for text generation.
     *
     */
    ChatCompletionRequestMessageContentPartFile: {
      /**
       * @description The type of the content part. Always `file`.
       * @enum {string}
       */
      type: 'file'
      file: {
        /** @description The name of the file, used when passing the file to the model as a
         *     string.
         *      */
        filename?: string
        /** @description The base64 encoded file data, used when passing the file to the model
         *     as a string.
         *      */
        file_data?: string
        /** @description The ID of an uploaded file to use as input.
         *      */
        file_id?: string
      }
    }
    /**
     * Image content part
     * @description Learn about [image inputs](/docs/guides/vision).
     *
     */
    ChatCompletionRequestMessageContentPartImage: {
      /**
       * @description The type of the content part.
       * @enum {string}
       */
      type: 'image_url'
      image_url: {
        /**
         * Format: uri
         * @description Either a URL of the image or the base64 encoded image data.
         */
        url: string
        /**
         * @description Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision#low-or-high-fidelity-image-understanding).
         * @default auto
         * @enum {string}
         */
        detail: 'auto' | 'low' | 'high'
      }
    }
    /** Refusal content part */
    ChatCompletionRequestMessageContentPartRefusal: {
      /**
       * @description The type of the content part.
       * @enum {string}
       */
      type: 'refusal'
      /** @description The refusal message generated by the model. */
      refusal: string
    }
    /**
     * Text content part
     * @description Learn about [text inputs](/docs/guides/text-generation).
     *
     */
    ChatCompletionRequestMessageContentPartText: {
      /**
       * @description The type of the content part.
       * @enum {string}
       */
      type: 'text'
      /** @description The text content. */
      text: string
    }
    /**
     * System message
     * @description Developer-provided instructions that the model should follow, regardless of
     *     messages sent by the user. With o1 models and newer, use `developer` messages
     *     for this purpose instead.
     *
     */
    ChatCompletionRequestSystemMessage: {
      /** @description The contents of the system message. */
      content:
        | string
        | components['schemas']['ChatCompletionRequestSystemMessageContentPart'][]
      /**
       * @description The role of the messages author, in this case `system`.
       * @enum {string}
       */
      role: 'system'
      /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
      name?: string
    }
    ChatCompletionRequestSystemMessageContentPart: components['schemas']['ChatCompletionRequestMessageContentPartText']
    /** Tool message */
    ChatCompletionRequestToolMessage: {
      /**
       * @description The role of the messages author, in this case `tool`.
       * @enum {string}
       */
      role: 'tool'
      /** @description The contents of the tool message. */
      content:
        | string
        | components['schemas']['ChatCompletionRequestToolMessageContentPart'][]
      /** @description Tool call that this message is responding to. */
      tool_call_id: string
    }
    ChatCompletionRequestToolMessageContentPart: components['schemas']['ChatCompletionRequestMessageContentPartText']
    /**
     * User message
     * @description Messages sent by an end user, containing prompts or additional context
     *     information.
     *
     */
    ChatCompletionRequestUserMessage: {
      /** @description The contents of the user message.
       *      */
      content:
        | string
        | components['schemas']['ChatCompletionRequestUserMessageContentPart'][]
      /**
       * @description The role of the messages author, in this case `user`.
       * @enum {string}
       */
      role: 'user'
      /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
      name?: string
    }
    ChatCompletionRequestUserMessageContentPart:
      | components['schemas']['ChatCompletionRequestMessageContentPartText']
      | components['schemas']['ChatCompletionRequestMessageContentPartImage']
      | components['schemas']['ChatCompletionRequestMessageContentPartAudio']
      | components['schemas']['ChatCompletionRequestMessageContentPartFile']
    /** @description A chat completion message generated by the model. */
    ChatCompletionResponseMessage: {
      /** @description The contents of the message. */
      content: string | null
      /** @description The refusal message generated by the model. */
      refusal: string | null
      tool_calls?: components['schemas']['ChatCompletionMessageToolCalls']
      /** @description Annotations for the message, when applicable, as when using the
       *     [web search tool](/docs/guides/tools-web-search?api-mode=chat).
       *      */
      annotations?: {
        /**
         * @description The type of the URL citation. Always `url_citation`.
         * @enum {string}
         */
        type: 'url_citation'
        /** @description A URL citation when using web search. */
        url_citation: {
          /** @description The index of the last character of the URL citation in the message. */
          end_index: number
          /** @description The index of the first character of the URL citation in the message. */
          start_index: number
          /** @description The URL of the web resource. */
          url: string
          /** @description The title of the web resource. */
          title: string
        }
      }[]
      /**
       * @description The role of the author of this message.
       * @enum {string}
       */
      role: 'assistant'
      /**
       * @deprecated
       * @description Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
       */
      function_call?: {
        /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
        arguments: string
        /** @description The name of the function to call. */
        name: string
      }
      /** @description If the audio output modality is requested, this object contains data
       *     about the audio response from the model. [Learn more](/docs/guides/audio).
       *      */
      audio?: {
        /** @description Unique identifier for this audio response. */
        id: string
        /** @description The Unix timestamp (in seconds) for when this audio response will
         *     no longer be accessible on the server for use in multi-turn
         *     conversations.
         *      */
        expires_at: number
        /** @description Base64 encoded audio bytes generated by the model, in the format
         *     specified in the request.
         *      */
        data: string
        /** @description Transcript of the audio generated by the model. */
        transcript: string
      } | null
    }
    /**
     * @description The role of the author of a message
     * @enum {string}
     */
    ChatCompletionRole:
      | 'developer'
      | 'system'
      | 'user'
      | 'assistant'
      | 'tool'
      | 'function'
    /**
     * @description Options for streaming response. Only set this when you set `stream: true`.
     *
     * @default null
     */
    ChatCompletionStreamOptions: {
      /** @description If set, an additional chunk will be streamed before the `data: [DONE]`
       *     message. The `usage` field on this chunk shows the token usage statistics
       *     for the entire request, and the `choices` field will always be an empty
       *     array.
       *
       *     All other chunks will also include a `usage` field, but with a null
       *     value. **NOTE:** If the stream is interrupted, you may not receive the
       *     final usage chunk which contains the total token usage for the request.
       *      */
      include_usage?: boolean
    } | null
    /** @description A chat completion delta generated by streamed model responses. */
    ChatCompletionStreamResponseDelta: {
      /** @description The contents of the chunk message. */
      content?: string | null
      /**
       * @deprecated
       * @description Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
       */
      function_call?: {
        /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
        arguments?: string
        /** @description The name of the function to call. */
        name?: string
      }
      tool_calls?: components['schemas']['ChatCompletionMessageToolCallChunk'][]
      /**
       * @description The role of the author of this message.
       * @enum {string}
       */
      role?: 'developer' | 'system' | 'user' | 'assistant' | 'tool'
      /** @description The refusal message generated by the model. */
      refusal?: string | null
    }
    ChatCompletionTokenLogprob: {
      /** @description The token. */
      token: string
      /** @description The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
      logprob: number
      /** @description A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. */
      bytes: number[] | null
      /** @description List of the most likely tokens and their log probability, at this token position. In rare cases, there may be fewer than the number of requested `top_logprobs` returned. */
      top_logprobs: {
        /** @description The token. */
        token: string
        /** @description The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
        logprob: number
        /** @description A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. */
        bytes: number[] | null
      }[]
    }
    ChatCompletionTool: {
      /**
       * @description The type of the tool. Currently, only `function` is supported.
       * @enum {string}
       */
      type: 'function'
      function: components['schemas']['FunctionObject']
    }
    /** @description Controls which (if any) tool is called by the model.
     *     `none` means the model will not call any tool and instead generates a message.
     *     `auto` means the model can pick between generating a message or calling one or more tools.
     *     `required` means the model must call one or more tools.
     *     Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
     *
     *     `none` is the default when no tools are present. `auto` is the default if tools are present.
     *      */
    ChatCompletionToolChoiceOption:
      | ('none' | 'auto' | 'required')
      | components['schemas']['ChatCompletionNamedToolChoice']
    /** @description The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
    ChunkingStrategyRequestParam:
      | components['schemas']['AutoChunkingStrategyRequestParam']
      | components['schemas']['StaticChunkingStrategyRequestParam']
    /**
     * Click
     * @description A click action.
     *
     */
    Click: {
      /**
       * @description Specifies the event type. For a click action, this property is
       *     always set to `click`.
       *
       * @default click
       * @enum {string}
       */
      type: 'click'
      /**
       * @description Indicates which mouse button was pressed during the click. One of `left`, `right`, `wheel`, `back`, or `forward`.
       *
       * @enum {string}
       */
      button: 'left' | 'right' | 'wheel' | 'back' | 'forward'
      /** @description The x-coordinate where the click occurred.
       *      */
      x: number
      /** @description The y-coordinate where the click occurred.
       *      */
      y: number
    }
    /**
     * Code interpreter file output
     * @description The output of a code interpreter tool call that is a file.
     *
     */
    CodeInterpreterFileOutput: {
      /**
       * @description The type of the code interpreter file output. Always `files`.
       *
       * @enum {string}
       */
      type: 'files'
      files: {
        /** @description The MIME type of the file.
         *      */
        mime_type: string
        /** @description The ID of the file.
         *      */
        file_id: string
      }[]
    }
    /**
     * Code interpreter text output
     * @description The output of a code interpreter tool call that is text.
     *
     */
    CodeInterpreterTextOutput: {
      /**
       * @description The type of the code interpreter text output. Always `logs`.
       *
       * @enum {string}
       */
      type: 'logs'
      /** @description The logs of the code interpreter tool call.
       *      */
      logs: string
    }
    /**
     * Code interpreter
     * @description A tool that runs code.
     *
     */
    CodeInterpreterTool: {
      /**
       * @description The type of the code interpreter tool. Always `code_interpreter`.
       *
       * @enum {string}
       */
      type: 'code_interpreter'
      /** @description The IDs of the files to run the code on.
       *      */
      file_ids: string[]
    }
    /**
     * Code interpreter tool call
     * @description A tool call to run code.
     *
     */
    CodeInterpreterToolCall: {
      /** @description The unique ID of the code interpreter tool call.
       *      */
      id: string
      /**
       * @description The type of the code interpreter tool call. Always `code_interpreter_call`.
       *
       * @enum {string}
       */
      type: 'code_interpreter_call'
      /** @description The code to run.
       *      */
      code: string
      /**
       * @description The status of the code interpreter tool call.
       *
       * @enum {string}
       */
      status: 'in_progress' | 'interpreting' | 'completed'
      /** @description The results of the code interpreter tool call.
       *      */
      results: components['schemas']['CodeInterpreterToolOutput'][]
    }
    CodeInterpreterToolOutput:
      | components['schemas']['CodeInterpreterTextOutput']
      | components['schemas']['CodeInterpreterFileOutput']
    /**
     * Comparison Filter
     * @description A filter used to compare a specified attribute key to a given value using a defined comparison operation.
     *
     */
    ComparisonFilter: {
      /**
       * @description Specifies the comparison operator: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`.
       *     - `eq`: equals
       *     - `ne`: not equal
       *     - `gt`: greater than
       *     - `gte`: greater than or equal
       *     - `lt`: less than
       *     - `lte`: less than or equal
       *
       * @default eq
       * @enum {string}
       */
      type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte'
      /** @description The key to compare against the value. */
      key: string
      /** @description The value to compare against the attribute key; supports string, number, or boolean types. */
      value: string | number | boolean
    }
    CompleteUploadRequest: {
      /** @description The ordered list of Part IDs.
       *      */
      part_ids: string[]
      /** @description The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.
       *      */
      md5?: string
    }
    /** @description Usage statistics for the completion request. */
    CompletionUsage: {
      /**
       * @description Number of tokens in the generated completion.
       * @default 0
       */
      completion_tokens: number
      /**
       * @description Number of tokens in the prompt.
       * @default 0
       */
      prompt_tokens: number
      /**
       * @description Total number of tokens used in the request (prompt + completion).
       * @default 0
       */
      total_tokens: number
      /** @description Breakdown of tokens used in a completion. */
      completion_tokens_details?: {
        /**
         * @description When using Predicted Outputs, the number of tokens in the
         *     prediction that appeared in the completion.
         *
         * @default 0
         */
        accepted_prediction_tokens: number
        /**
         * @description Audio input tokens generated by the model.
         * @default 0
         */
        audio_tokens: number
        /**
         * @description Tokens generated by the model for reasoning.
         * @default 0
         */
        reasoning_tokens: number
        /**
         * @description When using Predicted Outputs, the number of tokens in the
         *     prediction that did not appear in the completion. However, like
         *     reasoning tokens, these tokens are still counted in the total
         *     completion tokens for purposes of billing, output, and context window
         *     limits.
         *
         * @default 0
         */
        rejected_prediction_tokens: number
      }
      /** @description Breakdown of tokens used in the prompt. */
      prompt_tokens_details?: {
        /**
         * @description Audio input tokens present in the prompt.
         * @default 0
         */
        audio_tokens: number
        /**
         * @description Cached tokens present in the prompt.
         * @default 0
         */
        cached_tokens: number
      }
    }
    /**
     * Compound Filter
     * @description Combine multiple filters using `and` or `or`.
     */
    CompoundFilter: {
      /**
       * @description Type of operation: `and` or `or`.
       * @enum {string}
       */
      type: 'and' | 'or'
      /** @description Array of filters to combine. Items can be `ComparisonFilter` or `CompoundFilter`. */
      filters: (
        | components['schemas']['ComparisonFilter']
        | {
            [key: string]: unknown
          }
      )[]
    }
    ComputerAction:
      | components['schemas']['Click']
      | components['schemas']['DoubleClick']
      | components['schemas']['Drag']
      | components['schemas']['KeyPress']
      | components['schemas']['Move']
      | components['schemas']['Screenshot']
      | components['schemas']['Scroll']
      | components['schemas']['Type']
      | components['schemas']['Wait']
    /** @description A computer screenshot image used with the computer use tool.
     *      */
    ComputerScreenshotImage: {
      /**
       * @description Specifies the event type. For a computer screenshot, this property is
       *     always set to `computer_screenshot`.
       *
       * @default computer_screenshot
       * @enum {string}
       */
      type: 'computer_screenshot'
      /** @description The URL of the screenshot image. */
      image_url?: string
      /** @description The identifier of an uploaded file that contains the screenshot. */
      file_id?: string
    }
    /**
     * Computer use
     * @description A tool that controls a virtual computer. Learn more about the
     *     [computer tool](/docs/guides/tools-computer-use).
     *
     */
    ComputerTool: {
      /**
       * @description The type of the computer use tool. Always `computer_use_preview`.
       *
       * @enum {string}
       */
      type: 'computer_use_preview'
      /** @description The width of the computer display.
       *      */
      display_width: number
      /** @description The height of the computer display.
       *      */
      display_height: number
      /**
       * @description The type of computer environment to control.
       *
       * @enum {string}
       */
      environment: 'mac' | 'windows' | 'ubuntu' | 'browser'
    }
    /**
     * Computer tool call
     * @description A tool call to a computer use tool. See the
     *     [computer use guide](/docs/guides/tools-computer-use) for more information.
     *
     */
    ComputerToolCall: {
      /**
       * @description The type of the computer call. Always `computer_call`. (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'ComputerToolCall'
      /** @description The unique ID of the computer call. */
      id: string
      /** @description An identifier used when responding to the tool call with output.
       *      */
      call_id: string
      action: components['schemas']['ComputerAction']
      /** @description The pending safety checks for the computer call.
       *      */
      pending_safety_checks: components['schemas']['ComputerToolCallSafetyCheck'][]
      /**
       * @description The status of the item. One of `in_progress`, `completed`, or
       *     `incomplete`. Populated when items are returned via API.
       *
       * @enum {string}
       */
      status: 'in_progress' | 'completed' | 'incomplete'
    }
    /**
     * Computer tool call output
     * @description The output of a computer tool call.
     *
     */
    ComputerToolCallOutput: {
      /**
       * @description The type of the computer tool call output. Always `computer_call_output`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'ComputerToolCallOutput'
      /** @description The ID of the computer tool call output.
       *      */
      id?: string
      /** @description The ID of the computer tool call that produced the output.
       *      */
      call_id: string
      /** @description The safety checks reported by the API that have been acknowledged by the
       *     developer.
       *      */
      acknowledged_safety_checks?: components['schemas']['ComputerToolCallSafetyCheck'][]
      output: components['schemas']['ComputerScreenshotImage']
      /**
       * @description The status of the message input. One of `in_progress`, `completed`, or
       *     `incomplete`. Populated when input items are returned via API.
       *
       * @enum {string}
       */
      status?: 'in_progress' | 'completed' | 'incomplete'
    }
    ComputerToolCallOutputResource: components['schemas']['ComputerToolCallOutput'] & {
      /** @description The unique ID of the computer call tool output.
       *      */
      id: string
    } & {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'ComputerToolCallOutputResource'
    }
    /** @description A pending safety check for the computer call.
     *      */
    ComputerToolCallSafetyCheck: {
      /** @description The ID of the pending safety check. */
      id: string
      /** @description The type of the pending safety check. */
      code: string
      /** @description Details about the pending safety check. */
      message: string
    }
    /** @description Multi-modal input and output contents.
     *      */
    Content:
      | components['schemas']['InputContent']
      | components['schemas']['OutputContent']
    /**
     * Coordinate
     * @description An x/y coordinate pair, e.g. `{ x: 100, y: 200 }`.
     *
     */
    Coordinate: {
      /** @description The x-coordinate.
       *      */
      x: number
      /** @description The y-coordinate.
       *      */
      y: number
    }
    /** @description The aggregated costs details of the specific time bucket. */
    CostsResult: {
      /** @enum {string} */
      object: 'organization.costs.result'
      /** @description The monetary value in its associated currency. */
      amount?: {
        /** @description The numeric value of the cost. */
        value?: number
        /** @description Lowercase ISO-4217 currency e.g. "usd" */
        currency?: string
      }
      /** @description When `group_by=line_item`, this field provides the line item of the grouped costs result. */
      line_item?: string | null
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped costs result. */
      project_id?: string | null
    }
    CreateAssistantRequest: {
      /**
       * @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
       *
       * @example gpt-4o
       */
      model: string | components['schemas']['AssistantSupportedModels']
      /** @description The name of the assistant. The maximum length is 256 characters.
       *      */
      name?: string | null
      /** @description The description of the assistant. The maximum length is 512 characters.
       *      */
      description?: string | null
      /** @description The system instructions that the assistant uses. The maximum length is 256,000 characters.
       *      */
      instructions?: string | null
      reasoning_effort?: components['schemas']['ReasoningEffort']
      /**
       * @description A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
       *
       * @default []
       */
      tools: (
        | components['schemas']['AssistantToolsCode']
        | components['schemas']['AssistantToolsFileSearch']
        | components['schemas']['AssistantToolsFunction']
      )[]
      /** @description A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
       *      */
      tool_resources?: {
        code_interpreter?: {
          /**
           * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
           *
           * @default []
           */
          file_ids: string[]
        }
        file_search?: {
          /** @description The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           *      */
          vector_store_ids?: string[]
          /** @description A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           *      */
          vector_stores?: {
            /** @description A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
             *      */
            file_ids?: string[]
            /** @description The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
            chunking_strategy?:
              | {
                  /**
                   * @description Always `auto`.
                   * @enum {string}
                   */
                  type: 'auto'
                }
              | {
                  /**
                   * @description Always `static`.
                   * @enum {string}
                   */
                  type: 'static'
                  static: {
                    /** @description The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
                    max_chunk_size_tokens: number
                    /** @description The number of tokens that overlap between chunks. The default value is `400`.
                     *
                     *     Note that the overlap must not exceed half of `max_chunk_size_tokens`.
                     *      */
                    chunk_overlap_tokens: number
                  }
                }
            metadata?: components['schemas']['Metadata']
          }[]
        } & (unknown | unknown)
      } | null
      metadata?: components['schemas']['Metadata']
      /**
       * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
       *
       * @default 1
       * @example 1
       */
      temperature: number
      /**
       * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
       *
       *     We generally recommend altering this or temperature but not both.
       *
       * @default 1
       * @example 1
       */
      top_p: number
      response_format?: components['schemas']['AssistantsApiResponseFormatOption']
    }
    /** @description Represents a chat completion response returned by model, based on the provided input. */
    CreateChatCompletionFunctionResponse: {
      /** @description A unique identifier for the chat completion. */
      id: string
      /** @description A list of chat completion choices. Can be more than one if `n` is greater than 1. */
      choices: {
        /**
         * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, or `function_call` if the model called a function.
         *
         * @enum {string}
         */
        finish_reason: 'stop' | 'length' | 'function_call' | 'content_filter'
        /** @description The index of the choice in the list of choices. */
        index: number
        message: components['schemas']['ChatCompletionResponseMessage']
      }[]
      /** @description The Unix timestamp (in seconds) of when the chat completion was created. */
      created: number
      /** @description The model used for the chat completion. */
      model: string
      /** @description This fingerprint represents the backend configuration that the model runs with.
       *
       *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
       *      */
      system_fingerprint?: string
      /**
       * @description The object type, which is always `chat.completion`.
       * @enum {string}
       */
      object: 'chat.completion'
      usage?: components['schemas']['CompletionUsage']
    }
    /** @description Represents a streamed chunk of a chat completion response returned by model, based on the provided input. [Learn more](/docs/guides/streaming-responses). */
    CreateChatCompletionImageResponse: Record<string, never>
    CreateChatCompletionRequest: components['schemas']['CreateModelResponseProperties'] & {
      /** @description A list of messages comprising the conversation so far. Depending on the
       *     [model](/docs/models) you use, different message types (modalities) are
       *     supported, like [text](/docs/guides/text-generation),
       *     [images](/docs/guides/vision), and [audio](/docs/guides/audio).
       *      */
      messages: components['schemas']['ChatCompletionRequestMessage'][]
      /** @description Model ID used to generate the response, like `gpt-4o` or `o1`. OpenAI
       *     offers a wide range of models with different capabilities, performance
       *     characteristics, and price points. Refer to the [model guide](/docs/models)
       *     to browse and compare available models.
       *      */
      model: components['schemas']['ModelIdsShared']
      modalities?: components['schemas']['ResponseModalities']
      reasoning_effort?: components['schemas']['ReasoningEffort']
      /** @description An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).
       *      */
      max_completion_tokens?: number | null
      /**
       * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on
       *     their existing frequency in the text so far, decreasing the model's
       *     likelihood to repeat the same line verbatim.
       *
       * @default 0
       */
      frequency_penalty: number | null
      /**
       * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on
       *     whether they appear in the text so far, increasing the model's likelihood
       *     to talk about new topics.
       *
       * @default 0
       */
      presence_penalty: number | null
      /**
       * Web search
       * @description This tool searches the web for relevant results to use in a response.
       *     Learn more about the [web search tool](/docs/guides/tools-web-search?api-mode=chat).
       *
       */
      web_search_options?: {
        /** @description Approximate location parameters for the search.
         *      */
        user_location?: {
          /**
           * @description The type of location approximation. Always `approximate`.
           *
           * @enum {string}
           */
          type: 'approximate'
          approximate: components['schemas']['WebSearchLocation']
        } | null
        search_context_size?: components['schemas']['WebSearchContextSize']
      }
      /** @description An integer between 0 and 20 specifying the number of most likely tokens to
       *     return at each token position, each with an associated log probability.
       *     `logprobs` must be set to `true` if this parameter is used.
       *      */
      top_logprobs?: number | null
      /** @description An object specifying the format that the model must output.
       *
       *     Setting to `{ "type": "json_schema", "json_schema": {...} }` enables
       *     Structured Outputs which ensures the model will match your supplied JSON
       *     schema. Learn more in the [Structured Outputs
       *     guide](/docs/guides/structured-outputs).
       *
       *     Setting to `{ "type": "json_object" }` enables the older JSON mode, which
       *     ensures the message the model generates is valid JSON. Using `json_schema`
       *     is preferred for models that support it.
       *      */
      response_format?:
        | components['schemas']['ResponseFormatText']
        | components['schemas']['ResponseFormatJsonSchema']
        | components['schemas']['ResponseFormatJsonObject']
      /**
       * @description Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:
       *       - If set to 'auto', and the Project is Scale tier enabled, the system
       *         will utilize scale tier credits until they are exhausted.
       *       - If set to 'auto', and the Project is not Scale tier enabled, the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
       *       - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
       *       - When not set, the default behavior is 'auto'.
       *
       *       When this parameter is set, the response body will include the `service_tier` utilized.
       *
       * @default auto
       * @enum {string|null}
       */
      service_tier: 'auto' | 'default'
      /** @description Parameters for audio output. Required when audio output is requested with
       *     `modalities: ["audio"]`. [Learn more](/docs/guides/audio).
       *      */
      audio?: {
        /** @description The voice the model uses to respond. Supported voices are
         *     `alloy`, `ash`, `ballad`, `coral`, `echo`, `sage`, and `shimmer`.
         *      */
        voice: components['schemas']['VoiceIdsShared']
        /**
         * @description Specifies the output audio format. Must be one of `wav`, `mp3`, `flac`,
         *     `opus`, or `pcm16`.
         *
         * @enum {string}
         */
        format: 'wav' | 'mp3' | 'flac' | 'opus' | 'pcm16'
      } | null
      /**
       * @description Whether or not to store the output of this chat completion request for
       *     use in our [model distillation](/docs/guides/distillation) or
       *     [evals](/docs/guides/evals) products.
       *
       * @default false
       */
      store: boolean | null
      /**
       * @description If set to true, the model response data will be streamed to the client
       *     as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).
       *     See the [Streaming section below](/docs/api-reference/chat/streaming)
       *     for more information, along with the [streaming responses](/docs/guides/streaming-responses)
       *     guide for more information on how to handle the streaming events.
       *
       * @default false
       */
      stream: boolean | null
      stop?: components['schemas']['StopConfiguration']
      /**
       * @description Modify the likelihood of specified tokens appearing in the completion.
       *
       *     Accepts a JSON object that maps tokens (specified by their token ID in the
       *     tokenizer) to an associated bias value from -100 to 100. Mathematically,
       *     the bias is added to the logits generated by the model prior to sampling.
       *     The exact effect will vary per model, but values between -1 and 1 should
       *     decrease or increase likelihood of selection; values like -100 or 100
       *     should result in a ban or exclusive selection of the relevant token.
       *
       * @default null
       */
      logit_bias: {
        [key: string]: number
      } | null
      /**
       * @description Whether to return log probabilities of the output tokens or not. If true,
       *     returns the log probabilities of each output token returned in the
       *     `content` of `message`.
       *
       * @default false
       */
      logprobs: boolean | null
      /**
       * @deprecated
       * @description The maximum number of [tokens](/tokenizer) that can be generated in the
       *     chat completion. This value can be used to control
       *     [costs](https://openai.com/api/pricing/) for text generated via API.
       *
       *     This value is now deprecated in favor of `max_completion_tokens`, and is
       *     not compatible with [o1 series models](/docs/guides/reasoning).
       *
       */
      max_tokens?: number | null
      /**
       * @description How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs.
       * @default 1
       * @example 1
       */
      n: number
      /** @description Configuration for a [Predicted Output](/docs/guides/predicted-outputs),
       *     which can greatly improve response times when large parts of the model
       *     response are known ahead of time. This is most common when you are
       *     regenerating a file with only minor changes to most of the content.
       *      */
      prediction?: components['schemas']['PredictionContent'] | null
      /**
       * Format: int64
       * @description This feature is in Beta.
       *     If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
       *     Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
       *
       */
      seed?: number | null
      stream_options?: components['schemas']['ChatCompletionStreamOptions']
      /** @description A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. A max of 128 functions are supported.
       *      */
      tools?: components['schemas']['ChatCompletionTool'][]
      tool_choice?: components['schemas']['ChatCompletionToolChoiceOption']
      parallel_tool_calls?: components['schemas']['ParallelToolCalls']
      /**
       * @deprecated
       * @description Deprecated in favor of `tool_choice`.
       *
       *     Controls which (if any) function is called by the model.
       *
       *     `none` means the model will not call a function and instead generates a
       *     message.
       *
       *     `auto` means the model can pick between generating a message or calling a
       *     function.
       *
       *     Specifying a particular function via `{"name": "my_function"}` forces the
       *     model to call that function.
       *
       *     `none` is the default when no functions are present. `auto` is the default
       *     if functions are present.
       *
       */
      function_call?:
        | ('none' | 'auto')
        | components['schemas']['ChatCompletionFunctionCallOption']
      /**
       * @deprecated
       * @description Deprecated in favor of `tools`.
       *
       *     A list of functions the model may generate JSON inputs for.
       *
       */
      functions?: components['schemas']['ChatCompletionFunctions'][]
    }
    /** @description Represents a chat completion response returned by model, based on the provided input. */
    CreateChatCompletionResponse: {
      /** @description A unique identifier for the chat completion. */
      id: string
      /** @description A list of chat completion choices. Can be more than one if `n` is greater than 1. */
      choices: {
        /**
         * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
         *     `length` if the maximum number of tokens specified in the request was reached,
         *     `content_filter` if content was omitted due to a flag from our content filters,
         *     `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
         *
         * @enum {string}
         */
        finish_reason:
          | 'stop'
          | 'length'
          | 'tool_calls'
          | 'content_filter'
          | 'function_call'
        /** @description The index of the choice in the list of choices. */
        index: number
        message: components['schemas']['ChatCompletionResponseMessage']
        /** @description Log probability information for the choice. */
        logprobs: {
          /** @description A list of message content tokens with log probability information. */
          content: components['schemas']['ChatCompletionTokenLogprob'][] | null
          /** @description A list of message refusal tokens with log probability information. */
          refusal: components['schemas']['ChatCompletionTokenLogprob'][] | null
        } | null
      }[]
      /** @description The Unix timestamp (in seconds) of when the chat completion was created. */
      created: number
      /** @description The model used for the chat completion. */
      model: string
      /**
       * @description The service tier used for processing the request.
       * @example scale
       * @enum {string|null}
       */
      service_tier?: 'scale' | 'default' | null
      /** @description This fingerprint represents the backend configuration that the model runs with.
       *
       *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
       *      */
      system_fingerprint?: string
      /**
       * @description The object type, which is always `chat.completion`.
       * @enum {string}
       */
      object: 'chat.completion'
      usage?: components['schemas']['CompletionUsage']
    }
    /** @description Represents a streamed chunk of a chat completion response returned
     *     by the model, based on the provided input.
     *     [Learn more](/docs/guides/streaming-responses).
     *      */
    CreateChatCompletionStreamResponse: {
      /** @description A unique identifier for the chat completion. Each chunk has the same ID. */
      id: string
      /** @description A list of chat completion choices. Can contain more than one elements if `n` is greater than 1. Can also be empty for the
       *     last chunk if you set `stream_options: {"include_usage": true}`.
       *      */
      choices: {
        delta: components['schemas']['ChatCompletionStreamResponseDelta']
        /** @description Log probability information for the choice. */
        logprobs?: {
          /** @description A list of message content tokens with log probability information. */
          content: components['schemas']['ChatCompletionTokenLogprob'][] | null
          /** @description A list of message refusal tokens with log probability information. */
          refusal: components['schemas']['ChatCompletionTokenLogprob'][] | null
        } | null
        /**
         * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
         *     `length` if the maximum number of tokens specified in the request was reached,
         *     `content_filter` if content was omitted due to a flag from our content filters,
         *     `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
         *
         * @enum {string|null}
         */
        finish_reason:
          | 'stop'
          | 'length'
          | 'tool_calls'
          | 'content_filter'
          | 'function_call'
          | null
        /** @description The index of the choice in the list of choices. */
        index: number
      }[]
      /** @description The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp. */
      created: number
      /** @description The model to generate the completion. */
      model: string
      /**
       * @description The service tier used for processing the request.
       * @example scale
       * @enum {string|null}
       */
      service_tier?: 'scale' | 'default' | null
      /** @description This fingerprint represents the backend configuration that the model runs with.
       *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
       *      */
      system_fingerprint?: string
      /**
       * @description The object type, which is always `chat.completion.chunk`.
       * @enum {string}
       */
      object: 'chat.completion.chunk'
      /** @description An optional field that will only be present when you set
       *     `stream_options: {"include_usage": true}` in your request. When present, it
       *     contains a null value **except for the last chunk** which contains the
       *     token usage statistics for the entire request.
       *
       *     **NOTE:** If the stream is interrupted or cancelled, you may not
       *     receive the final usage chunk which contains the total token usage for
       *     the request.
       *      */
      usage?: components['schemas']['CompletionUsage']
    }
    CreateCompletionRequest: {
      /** @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
       *      */
      model: string | ('gpt-3.5-turbo-instruct' | 'davinci-002' | 'babbage-002')
      /**
       * @description The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
       *
       *     Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
       *
       * @default <|endoftext|>
       */
      prompt: string | string[] | number[] | number[][]
      /**
       * @description Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.
       *
       *     When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.
       *
       *     **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
       *
       * @default 1
       */
      best_of: number
      /**
       * @description Echo back the prompt in addition to the completion
       *
       * @default false
       */
      echo: boolean | null
      /**
       * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
       *
       *     [See more information about frequency and presence penalties.](/docs/guides/text-generation)
       *
       * @default 0
       */
      frequency_penalty: number | null
      /**
       * @description Modify the likelihood of specified tokens appearing in the completion.
       *
       *     Accepts a JSON object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
       *
       *     As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token from being generated.
       *
       * @default null
       */
      logit_bias: {
        [key: string]: number
      } | null
      /**
       * @description Include the log probabilities on the `logprobs` most likely output tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
       *
       *     The maximum value for `logprobs` is 5.
       *
       * @default null
       */
      logprobs: number | null
      /**
       * @description The maximum number of [tokens](/tokenizer) that can be generated in the completion.
       *
       *     The token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
       *
       * @default 16
       * @example 16
       */
      max_tokens: number
      /**
       * @description How many completions to generate for each prompt.
       *
       *     **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
       *
       * @default 1
       * @example 1
       */
      n: number
      /**
       * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
       *
       *     [See more information about frequency and presence penalties.](/docs/guides/text-generation)
       *
       * @default 0
       */
      presence_penalty: number | null
      /**
       * Format: int64
       * @description If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
       *
       *     Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
       *
       */
      seed?: number | null
      stop?: components['schemas']['StopConfiguration']
      /**
       * @description Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).
       *
       * @default false
       */
      stream: boolean | null
      stream_options?: components['schemas']['ChatCompletionStreamOptions']
      /**
       * @description The suffix that comes after a completion of inserted text.
       *
       *     This parameter is only supported for `gpt-3.5-turbo-instruct`.
       *
       * @default null
       * @example test.
       */
      suffix: string | null
      /**
       * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
       *
       *     We generally recommend altering this or `top_p` but not both.
       *
       * @default 1
       * @example 1
       */
      temperature: number
      /**
       * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
       *
       *     We generally recommend altering this or `temperature` but not both.
       *
       * @default 1
       * @example 1
       */
      top_p: number
      /**
       * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
       *
       * @example user-1234
       */
      user?: string
    }
    /** @description Represents a completion response from the API. Note: both the streamed and non-streamed response objects share the same shape (unlike the chat endpoint).
     *      */
    CreateCompletionResponse: {
      /** @description A unique identifier for the completion. */
      id: string
      /** @description The list of completion choices the model generated for the input prompt. */
      choices: {
        /**
         * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
         *     `length` if the maximum number of tokens specified in the request was reached,
         *     or `content_filter` if content was omitted due to a flag from our content filters.
         *
         * @enum {string}
         */
        finish_reason: 'stop' | 'length' | 'content_filter'
        index: number
        logprobs: {
          text_offset?: number[]
          token_logprobs?: number[]
          tokens?: string[]
          top_logprobs?: {
            [key: string]: number
          }[]
        } | null
        text: string
      }[]
      /** @description The Unix timestamp (in seconds) of when the completion was created. */
      created: number
      /** @description The model used for completion. */
      model: string
      /** @description This fingerprint represents the backend configuration that the model runs with.
       *
       *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
       *      */
      system_fingerprint?: string
      /**
       * @description The object type, which is always "text_completion"
       * @enum {string}
       */
      object: 'text_completion'
      usage?: components['schemas']['CompletionUsage']
    }
    CreateEmbeddingRequest: {
      /**
       * @description Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. Some models may also impose a limit on total number of tokens summed across inputs.
       *
       * @example The quick brown fox jumped over the lazy dog
       */
      input: string | string[] | number[] | number[][]
      /**
       * @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
       *
       * @example text-embedding-3-small
       */
      model:
        | string
        | (
            | 'text-embedding-ada-002'
            | 'text-embedding-3-small'
            | 'text-embedding-3-large'
          )
      /**
       * @description The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/).
       * @default float
       * @example float
       * @enum {string}
       */
      encoding_format: 'float' | 'base64'
      /** @description The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.
       *      */
      dimensions?: number
      /**
       * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
       *
       * @example user-1234
       */
      user?: string
    }
    CreateEmbeddingResponse: {
      /** @description The list of embeddings generated by the model. */
      data: components['schemas']['Embedding'][]
      /** @description The name of the model used to generate the embedding. */
      model: string
      /**
       * @description The object type, which is always "list".
       * @enum {string}
       */
      object: 'list'
      /** @description The usage information for the request. */
      usage: {
        /** @description The number of tokens used by the prompt. */
        prompt_tokens: number
        /** @description The total number of tokens used by the request. */
        total_tokens: number
      }
    }
    CreateFileRequest: {
      /**
       * Format: binary
       * @description The File object (not file name) to be uploaded.
       *
       */
      file: string
      /**
       * @description The intended purpose of the uploaded file. One of: - `assistants`: Used in the Assistants API - `batch`: Used in the Batch API - `fine-tune`: Used for fine-tuning - `vision`: Images used for vision fine-tuning - `user_data`: Flexible file type for any purpose - `evals`: Used for eval data sets
       *
       * @enum {string}
       */
      purpose:
        | 'assistants'
        | 'batch'
        | 'fine-tune'
        | 'vision'
        | 'user_data'
        | 'evals'
    }
    CreateFineTuningCheckpointPermissionRequest: {
      /** @description The project identifiers to grant access to. */
      project_ids: string[]
    }
    CreateFineTuningJobRequest: {
      /**
       * @description The name of the model to fine-tune. You can select one of the
       *     [supported models](/docs/guides/fine-tuning#which-models-can-be-fine-tuned).
       *
       * @example gpt-4o-mini
       */
      model:
        | string
        | ('babbage-002' | 'davinci-002' | 'gpt-3.5-turbo' | 'gpt-4o-mini')
      /**
       * @description The ID of an uploaded file that contains training data.
       *
       *     See [upload file](/docs/api-reference/files/create) for how to upload a file.
       *
       *     Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.
       *
       *     The contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input), [completions](/docs/api-reference/fine-tuning/completions-input) format, or if the fine-tuning method uses the [preference](/docs/api-reference/fine-tuning/preference-input) format.
       *
       *     See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
       *
       * @example file-abc123
       */
      training_file: string
      /**
       * @deprecated
       * @description The hyperparameters used for the fine-tuning job.
       *     This value is now deprecated in favor of `method`, and should be passed in under the `method` parameter.
       *
       */
      hyperparameters?: {
        /**
         * @description Number of examples in each batch. A larger batch size means that model parameters
         *     are updated less frequently, but with lower variance.
         *
         * @default auto
         */
        batch_size?: 'auto' | number
        /**
         * @description Scaling factor for the learning rate. A smaller learning rate may be useful to avoid
         *     overfitting.
         *
         * @default auto
         */
        learning_rate_multiplier?: 'auto' | number
        /**
         * @description The number of epochs to train the model for. An epoch refers to one full cycle
         *     through the training dataset.
         *
         * @default auto
         */
        n_epochs?: 'auto' | number
      }
      /**
       * @description A string of up to 64 characters that will be added to your fine-tuned model name.
       *
       *     For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-4o-mini:openai:custom-model-name:7p4lURel`.
       *
       * @default null
       */
      suffix: string | null
      /**
       * @description The ID of an uploaded file that contains validation data.
       *
       *     If you provide this file, the data is used to generate validation
       *     metrics periodically during fine-tuning. These metrics can be viewed in
       *     the fine-tuning results file.
       *     The same data should not be present in both train and validation files.
       *
       *     Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.
       *
       *     See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
       *
       * @example file-abc123
       */
      validation_file?: string | null
      /** @description A list of integrations to enable for your fine-tuning job. */
      integrations?:
        | {
            /** @description The type of integration to enable. Currently, only "wandb" (Weights and Biases) is supported.
             *      */
            type: 'wandb'
            /** @description The settings for your integration with Weights and Biases. This payload specifies the project that
             *     metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
             *     to your run, and set a default entity (team, username, etc) to be associated with your run.
             *      */
            wandb: {
              /**
               * @description The name of the project that the new run will be created under.
               *
               * @example my-wandb-project
               */
              project: string
              /** @description A display name to set for the run. If not set, we will use the Job ID as the name.
               *      */
              name?: string | null
              /** @description The entity to use for the run. This allows you to set the team or username of the WandB user that you would
               *     like associated with the run. If not set, the default entity for the registered WandB API key is used.
               *      */
              entity?: string | null
              /** @description A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
               *     default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
               *      */
              tags?: string[]
            }
          }[]
        | null
      /**
       * @description The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases.
       *     If a seed is not specified, one will be generated for you.
       *
       * @example 42
       */
      seed?: number | null
      method?: components['schemas']['FineTuneMethod']
      metadata?: components['schemas']['Metadata']
    }
    CreateImageEditRequest: {
      /**
       * Format: binary
       * @description The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
       */
      image: string
      /**
       * @description A text description of the desired image(s). The maximum length is 1000 characters.
       * @example A cute baby sea otter wearing a beret
       */
      prompt: string
      /**
       * Format: binary
       * @description An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`.
       */
      mask?: string
      /**
       * @description The model to use for image generation. Only `dall-e-2` is supported at this time.
       * @default dall-e-2
       * @example dall-e-2
       */
      model: string | 'dall-e-2'
      /**
       * @description The number of images to generate. Must be between 1 and 10.
       * @default 1
       * @example 1
       */
      n: number
      /**
       * @description The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
       * @default 1024x1024
       * @example 1024x1024
       * @enum {string|null}
       */
      size: '256x256' | '512x512' | '1024x1024'
      /**
       * @description The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
       * @default url
       * @example url
       * @enum {string|null}
       */
      response_format: 'url' | 'b64_json'
      /**
       * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
       *
       * @example user-1234
       */
      user?: string
    }
    CreateImageRequest: {
      /**
       * @description A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`.
       * @example A cute baby sea otter
       */
      prompt: string
      /**
       * @description The model to use for image generation.
       * @default dall-e-2
       * @example dall-e-3
       */
      model: string | ('dall-e-2' | 'dall-e-3')
      /**
       * @description The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
       * @default 1
       * @example 1
       */
      n: number
      /**
       * @description The quality of the image that will be generated. `hd` creates images with finer details and greater consistency across the image. This param is only supported for `dall-e-3`.
       * @default standard
       * @example standard
       * @enum {string}
       */
      quality: 'standard' | 'hd'
      /**
       * @description The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
       * @default url
       * @example url
       * @enum {string|null}
       */
      response_format: 'url' | 'b64_json'
      /**
       * @description The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models.
       * @default 1024x1024
       * @example 1024x1024
       * @enum {string|null}
       */
      size: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792'
      /**
       * @description The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`.
       * @default vivid
       * @example vivid
       * @enum {string|null}
       */
      style: 'vivid' | 'natural'
      /**
       * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
       *
       * @example user-1234
       */
      user?: string
    }
    CreateImageVariationRequest: {
      /**
       * Format: binary
       * @description The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
       */
      image: string
      /**
       * @description The model to use for image generation. Only `dall-e-2` is supported at this time.
       * @default dall-e-2
       * @example dall-e-2
       */
      model: string | 'dall-e-2'
      /**
       * @description The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
       * @default 1
       * @example 1
       */
      n: number
      /**
       * @description The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
       * @default url
       * @example url
       * @enum {string|null}
       */
      response_format: 'url' | 'b64_json'
      /**
       * @description The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
       * @default 1024x1024
       * @example 1024x1024
       * @enum {string|null}
       */
      size: '256x256' | '512x512' | '1024x1024'
      /**
       * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
       *
       * @example user-1234
       */
      user?: string
    }
    CreateMessageRequest: {
      /**
       * @description The role of the entity that is creating the message. Allowed values include:
       *     - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.
       *     - `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.
       *
       * @enum {string}
       */
      role: 'user' | 'assistant'
      content:
        | string
        | (
            | components['schemas']['MessageContentImageFileObject']
            | components['schemas']['MessageContentImageUrlObject']
            | components['schemas']['MessageRequestContentTextObject']
          )[]
      /** @description A list of files attached to the message, and the tools they should be added to. */
      attachments?:
        | {
            /** @description The ID of the file to attach to the message. */
            file_id?: string
            /** @description The tools to add this file to. */
            tools?: (
              | components['schemas']['AssistantToolsCode']
              | components['schemas']['AssistantToolsFileSearchTypeOnly']
            )[]
          }[]
        | null
      metadata?: components['schemas']['Metadata']
    }
    CreateModelResponseProperties: components['schemas']['ModelResponseProperties']
    CreateModerationRequest: {
      /** @description Input (or inputs) to classify. Can be a single string, an array of strings, or
       *     an array of multi-modal input objects similar to other models.
       *      */
      input:
        | string
        | string[]
        | (
            | {
                /**
                 * @description Always `image_url`.
                 * @enum {string}
                 */
                type: 'image_url'
                /** @description Contains either an image URL or a data URL for a base64 encoded image. */
                image_url: {
                  /**
                   * Format: uri
                   * @description Either a URL of the image or the base64 encoded image data.
                   * @example https://example.com/image.jpg
                   */
                  url: string
                }
              }
            | {
                /**
                 * @description Always `text`.
                 * @enum {string}
                 */
                type: 'text'
                /**
                 * @description A string of text to classify.
                 * @example I want to kill them
                 */
                text: string
              }
          )[]
      /**
       * @description The content moderation model you would like to use. Learn more in
       *     [the moderation guide](/docs/guides/moderation), and learn about
       *     available models [here](/docs/models#moderation).
       *
       * @default omni-moderation-latest
       * @example omni-moderation-2024-09-26
       */
      model:
        | string
        | (
            | 'omni-moderation-latest'
            | 'omni-moderation-2024-09-26'
            | 'text-moderation-latest'
            | 'text-moderation-stable'
          )
    }
    /** @description Represents if a given text input is potentially harmful. */
    CreateModerationResponse: {
      /** @description The unique identifier for the moderation request. */
      id: string
      /** @description The model used to generate the moderation results. */
      model: string
      /** @description A list of moderation objects. */
      results: {
        /** @description Whether any of the below categories are flagged. */
        flagged: boolean
        /** @description A list of the categories, and whether they are flagged or not. */
        categories: {
          /** @description Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harassment. */
          hate: boolean
          /** @description Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. */
          'hate/threatening': boolean
          /** @description Content that expresses, incites, or promotes harassing language towards any target. */
          harassment: boolean
          /** @description Harassment content that also includes violence or serious harm towards any target. */
          'harassment/threatening': boolean
          /** @description Content that includes instructions or advice that facilitate the planning or execution of wrongdoing, or that gives advice or instruction on how to commit illicit acts. For example, "how to shoplift" would fit this category. */
          illicit: boolean | null
          /** @description Content that includes instructions or advice that facilitate the planning or execution of wrongdoing that also includes violence, or that gives advice or instruction on the procurement of any weapon. */
          'illicit/violent': boolean | null
          /** @description Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders. */
          'self-harm': boolean
          /** @description Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders. */
          'self-harm/intent': boolean
          /** @description Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts. */
          'self-harm/instructions': boolean
          /** @description Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness). */
          sexual: boolean
          /** @description Sexual content that includes an individual who is under 18 years old. */
          'sexual/minors': boolean
          /** @description Content that depicts death, violence, or physical injury. */
          violence: boolean
          /** @description Content that depicts death, violence, or physical injury in graphic detail. */
          'violence/graphic': boolean
        }
        /** @description A list of the categories along with their scores as predicted by model. */
        category_scores: {
          /** @description The score for the category 'hate'. */
          hate: number
          /** @description The score for the category 'hate/threatening'. */
          'hate/threatening': number
          /** @description The score for the category 'harassment'. */
          harassment: number
          /** @description The score for the category 'harassment/threatening'. */
          'harassment/threatening': number
          /** @description The score for the category 'illicit'. */
          illicit: number
          /** @description The score for the category 'illicit/violent'. */
          'illicit/violent': number
          /** @description The score for the category 'self-harm'. */
          'self-harm': number
          /** @description The score for the category 'self-harm/intent'. */
          'self-harm/intent': number
          /** @description The score for the category 'self-harm/instructions'. */
          'self-harm/instructions': number
          /** @description The score for the category 'sexual'. */
          sexual: number
          /** @description The score for the category 'sexual/minors'. */
          'sexual/minors': number
          /** @description The score for the category 'violence'. */
          violence: number
          /** @description The score for the category 'violence/graphic'. */
          'violence/graphic': number
        }
        /** @description A list of the categories along with the input type(s) that the score applies to. */
        category_applied_input_types: {
          /** @description The applied input type(s) for the category 'hate'. */
          hate: 'text'[]
          /** @description The applied input type(s) for the category 'hate/threatening'. */
          'hate/threatening': 'text'[]
          /** @description The applied input type(s) for the category 'harassment'. */
          harassment: 'text'[]
          /** @description The applied input type(s) for the category 'harassment/threatening'. */
          'harassment/threatening': 'text'[]
          /** @description The applied input type(s) for the category 'illicit'. */
          illicit: 'text'[]
          /** @description The applied input type(s) for the category 'illicit/violent'. */
          'illicit/violent': 'text'[]
          /** @description The applied input type(s) for the category 'self-harm'. */
          'self-harm': ('text' | 'image')[]
          /** @description The applied input type(s) for the category 'self-harm/intent'. */
          'self-harm/intent': ('text' | 'image')[]
          /** @description The applied input type(s) for the category 'self-harm/instructions'. */
          'self-harm/instructions': ('text' | 'image')[]
          /** @description The applied input type(s) for the category 'sexual'. */
          sexual: ('text' | 'image')[]
          /** @description The applied input type(s) for the category 'sexual/minors'. */
          'sexual/minors': 'text'[]
          /** @description The applied input type(s) for the category 'violence'. */
          violence: ('text' | 'image')[]
          /** @description The applied input type(s) for the category 'violence/graphic'. */
          'violence/graphic': ('text' | 'image')[]
        }
      }[]
    }
    CreateResponse: components['schemas']['CreateModelResponseProperties'] &
      components['schemas']['ResponseProperties'] & {
        /** @description Text, image, or file inputs to the model, used to generate a response.
         *
         *     Learn more:
         *     - [Text inputs and outputs](/docs/guides/text)
         *     - [Image inputs](/docs/guides/images)
         *     - [File inputs](/docs/guides/pdf-files)
         *     - [Conversation state](/docs/guides/conversation-state)
         *     - [Function calling](/docs/guides/function-calling)
         *      */
        input: string | components['schemas']['InputItem'][]
        /** @description Specify additional output data to include in the model response. Currently
         *     supported values are:
         *     - `file_search_call.results`: Include the search results of
         *       the file search tool call.
         *     - `message.input_image.image_url`: Include image urls from the input message.
         *     - `computer_call_output.output.image_url`: Include image urls from the computer call output.
         *      */
        include?: components['schemas']['Includable'][] | null
        /**
         * @description Whether to allow the model to run tool calls in parallel.
         *
         * @default true
         */
        parallel_tool_calls: boolean
        /**
         * @description Whether to store the generated model response for later retrieval via
         *     API.
         *
         * @default true
         */
        store: boolean
        /**
         * @description If set to true, the model response data will be streamed to the client
         *     as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).
         *     See the [Streaming section below](/docs/api-reference/responses-streaming)
         *     for more information.
         *
         * @default false
         */
        stream: boolean | null
      }
    CreateRunRequest: {
      /** @description The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
      assistant_id: string
      /**
       * @description The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.
       * @example gpt-4o
       */
      model?:
        | (string | components['schemas']['AssistantSupportedModels'])
        | null
      reasoning_effort?: components['schemas']['ReasoningEffort']
      /** @description Overrides the [instructions](/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis. */
      instructions?: string | null
      /** @description Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions. */
      additional_instructions?: string | null
      /** @description Adds additional messages to the thread before creating the run. */
      additional_messages?:
        | components['schemas']['CreateMessageRequest'][]
        | null
      /** @description Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
      tools?:
        | (
            | components['schemas']['AssistantToolsCode']
            | components['schemas']['AssistantToolsFileSearch']
            | components['schemas']['AssistantToolsFunction']
          )[]
        | null
      metadata?: components['schemas']['Metadata']
      /**
       * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
       *
       * @default 1
       * @example 1
       */
      temperature: number
      /**
       * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
       *
       *     We generally recommend altering this or temperature but not both.
       *
       * @default 1
       * @example 1
       */
      top_p: number
      /** @description If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
       *      */
      stream?: boolean | null
      /** @description The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
       *      */
      max_prompt_tokens?: number | null
      /** @description The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
       *      */
      max_completion_tokens?: number | null
      truncation_strategy?: components['schemas']['TruncationObject'] & unknown
      tool_choice?: components['schemas']['AssistantsApiToolChoiceOption'] &
        unknown
      parallel_tool_calls?: components['schemas']['ParallelToolCalls']
      response_format?: components['schemas']['AssistantsApiResponseFormatOption']
    }
    CreateSpeechRequest: {
      /** @description One of the available [TTS models](/docs/models#tts): `tts-1`, `tts-1-hd` or `gpt-4o-mini-tts`.
       *      */
      model: string | ('tts-1' | 'tts-1-hd' | 'gpt-4o-mini-tts')
      /** @description The text to generate audio for. The maximum length is 4096 characters. */
      input: string
      /** @description Control the voice of your generated audio with additional instructions. Does not work with `tts-1` or `tts-1-hd`. */
      instructions?: string
      /** @description The voice to use when generating the audio. Supported voices are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, and `verse`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech#voice-options). */
      voice: components['schemas']['VoiceIdsShared']
      /**
       * @description The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`.
       * @default mp3
       * @enum {string}
       */
      response_format: 'mp3' | 'opus' | 'aac' | 'flac' | 'wav' | 'pcm'
      /**
       * @description The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.
       * @default 1
       */
      speed: number
    }
    CreateThreadAndRunRequest: {
      /** @description The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
      assistant_id: string
      thread?: components['schemas']['CreateThreadRequest']
      /**
       * @description The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.
       * @example gpt-4o
       */
      model?:
        | (
            | string
            | (
                | 'gpt-4o'
                | 'gpt-4o-2024-11-20'
                | 'gpt-4o-2024-08-06'
                | 'gpt-4o-2024-05-13'
                | 'gpt-4o-mini'
                | 'gpt-4o-mini-2024-07-18'
                | 'gpt-4.5-preview'
                | 'gpt-4.5-preview-2025-02-27'
                | 'gpt-4-turbo'
                | 'gpt-4-turbo-2024-04-09'
                | 'gpt-4-0125-preview'
                | 'gpt-4-turbo-preview'
                | 'gpt-4-1106-preview'
                | 'gpt-4-vision-preview'
                | 'gpt-4'
                | 'gpt-4-0314'
                | 'gpt-4-0613'
                | 'gpt-4-32k'
                | 'gpt-4-32k-0314'
                | 'gpt-4-32k-0613'
                | 'gpt-3.5-turbo'
                | 'gpt-3.5-turbo-16k'
                | 'gpt-3.5-turbo-0613'
                | 'gpt-3.5-turbo-1106'
                | 'gpt-3.5-turbo-0125'
                | 'gpt-3.5-turbo-16k-0613'
              )
          )
        | null
      /** @description Override the default system message of the assistant. This is useful for modifying the behavior on a per-run basis. */
      instructions?: string | null
      /** @description Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
      tools?:
        | (
            | components['schemas']['AssistantToolsCode']
            | components['schemas']['AssistantToolsFileSearch']
            | components['schemas']['AssistantToolsFunction']
          )[]
        | null
      /** @description A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
       *      */
      tool_resources?: {
        code_interpreter?: {
          /**
           * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
           *
           * @default []
           */
          file_ids: string[]
        }
        file_search?: {
          /** @description The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           *      */
          vector_store_ids?: string[]
        }
      } | null
      metadata?: components['schemas']['Metadata']
      /**
       * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
       *
       * @default 1
       * @example 1
       */
      temperature: number
      /**
       * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
       *
       *     We generally recommend altering this or temperature but not both.
       *
       * @default 1
       * @example 1
       */
      top_p: number
      /** @description If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
       *      */
      stream?: boolean | null
      /** @description The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
       *      */
      max_prompt_tokens?: number | null
      /** @description The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
       *      */
      max_completion_tokens?: number | null
      truncation_strategy?: components['schemas']['TruncationObject'] & unknown
      tool_choice?: components['schemas']['AssistantsApiToolChoiceOption'] &
        unknown
      parallel_tool_calls?: components['schemas']['ParallelToolCalls']
      response_format?: components['schemas']['AssistantsApiResponseFormatOption']
    }
    /** @description Options to create a new thread. If no thread is provided when running a
     *     request, an empty thread will be created.
     *      */
    CreateThreadRequest: {
      /** @description A list of [messages](/docs/api-reference/messages) to start the thread with. */
      messages?: components['schemas']['CreateMessageRequest'][]
      /** @description A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
       *      */
      tool_resources?: {
        code_interpreter?: {
          /**
           * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
           *
           * @default []
           */
          file_ids: string[]
        }
        file_search?: {
          /** @description The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
           *      */
          vector_store_ids?: string[]
          /** @description A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.
           *      */
          vector_stores?: {
            /** @description A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
             *      */
            file_ids?: string[]
            /** @description The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
            chunking_strategy?:
              | {
                  /**
                   * @description Always `auto`.
                   * @enum {string}
                   */
                  type: 'auto'
                }
              | {
                  /**
                   * @description Always `static`.
                   * @enum {string}
                   */
                  type: 'static'
                  static: {
                    /** @description The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
                    max_chunk_size_tokens: number
                    /** @description The number of tokens that overlap between chunks. The default value is `400`.
                     *
                     *     Note that the overlap must not exceed half of `max_chunk_size_tokens`.
                     *      */
                    chunk_overlap_tokens: number
                  }
                }
            metadata?: components['schemas']['Metadata']
          }[]
        } & (unknown | unknown)
      } | null
      metadata?: components['schemas']['Metadata']
    }
    CreateTranscriptionRequest: {
      /**
       * Format: binary
       * @description The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
       *
       */
      file: string
      /**
       * @description ID of the model to use. The options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1` (which is powered by our open source Whisper V2 model).
       *
       * @example gpt-4o-transcribe
       */
      model:
        | string
        | ('whisper-1' | 'gpt-4o-transcribe' | 'gpt-4o-mini-transcribe')
      /** @description The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency.
       *      */
      language?: string
      /** @description An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should match the audio language.
       *      */
      prompt?: string
      response_format?: components['schemas']['AudioResponseFormat']
      /**
       * @description The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
       *
       * @default 0
       */
      temperature: number
      /** @description Additional information to include in the transcription response.
       *     `logprobs` will return the log probabilities of the tokens in the
       *     response to understand the model's confidence in the transcription.
       *     `logprobs` only works with response_format set to `json` and only with
       *     the models `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`.
       *      */
      'include[]'?: components['schemas']['TranscriptionInclude'][]
      /**
       * @description The timestamp granularities to populate for this transcription. `response_format` must be set `verbose_json` to use timestamp granularities. Either or both of these options are supported: `word`, or `segment`. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.
       *
       * @default [
       *       "segment"
       *     ]
       */
      'timestamp_granularities[]': ('word' | 'segment')[]
      /**
       * @description If set to true, the model response data will be streamed to the client
       *     as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).
       *     See the [Streaming section of the Speech-to-Text guide](/docs/guides/speech-to-text?lang=curl#streaming-transcriptions)
       *     for more information.
       *
       *     Note: Streaming is not supported for the `whisper-1` model and will be ignored.
       *
       * @default false
       */
      stream: boolean | null
    }
    /** @description Represents a transcription response returned by model, based on the provided input. */
    CreateTranscriptionResponseJson: {
      /** @description The transcribed text. */
      text: string
      /** @description The log probabilities of the tokens in the transcription. Only returned with the models `gpt-4o-transcribe` and `gpt-4o-mini-transcribe` if `logprobs` is added to the `include` array.
       *      */
      logprobs?: components['schemas']['LogProbProperties'][]
    }
    CreateTranscriptionResponseStreamEvent:
      | components['schemas']['TranscriptTextDeltaEvent']
      | components['schemas']['TranscriptTextDoneEvent']
    /** @description Represents a verbose json transcription response returned by model, based on the provided input. */
    CreateTranscriptionResponseVerboseJson: {
      /** @description The language of the input audio. */
      language: string
      /** @description The duration of the input audio. */
      duration: number
      /** @description The transcribed text. */
      text: string
      /** @description Extracted words and their corresponding timestamps. */
      words?: components['schemas']['TranscriptionWord'][]
      /** @description Segments of the transcribed text and their corresponding details. */
      segments?: components['schemas']['TranscriptionSegment'][]
    }
    CreateTranslationRequest: {
      /**
       * Format: binary
       * @description The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
       *
       */
      file: string
      /**
       * @description ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
       *
       * @example whisper-1
       */
      model: string | 'whisper-1'
      /** @description An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should be in English.
       *      */
      prompt?: string
      /**
       * @description The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
       *
       * @default json
       * @enum {string}
       */
      response_format: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt'
      /**
       * @description The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
       *
       * @default 0
       */
      temperature: number
    }
    CreateTranslationResponseJson: {
      text: string
    }
    CreateTranslationResponseVerboseJson: {
      /** @description The language of the output translation (always `english`). */
      language: string
      /** @description The duration of the input audio. */
      duration: number
      /** @description The translated text. */
      text: string
      /** @description Segments of the translated text and their corresponding details. */
      segments?: components['schemas']['TranscriptionSegment'][]
    }
    CreateUploadRequest: {
      /** @description The name of the file to upload.
       *      */
      filename: string
      /**
       * @description The intended purpose of the uploaded file.
       *
       *     See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).
       *
       * @enum {string}
       */
      purpose: 'assistants' | 'batch' | 'fine-tune' | 'vision'
      /** @description The number of bytes in the file you are uploading.
       *      */
      bytes: number
      /** @description The MIME type of the file.
       *
       *     This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.
       *      */
      mime_type: string
    }
    CreateVectorStoreFileBatchRequest: {
      /** @description A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
      file_ids: string[]
      chunking_strategy?: components['schemas']['ChunkingStrategyRequestParam']
      attributes?: components['schemas']['VectorStoreFileAttributes']
    }
    CreateVectorStoreFileRequest: {
      /** @description A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files. */
      file_id: string
      chunking_strategy?: components['schemas']['ChunkingStrategyRequestParam']
      attributes?: components['schemas']['VectorStoreFileAttributes']
    }
    CreateVectorStoreRequest: {
      /** @description A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
      file_ids?: string[]
      /** @description The name of the vector store. */
      name?: string
      expires_after?: components['schemas']['VectorStoreExpirationAfter']
      /** @description The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty. */
      chunking_strategy?:
        | components['schemas']['AutoChunkingStrategyRequestParam']
        | components['schemas']['StaticChunkingStrategyRequestParam']
      metadata?: components['schemas']['Metadata']
    }
    DefaultProjectErrorResponse: {
      code: number
      message: string
    }
    DeleteAssistantResponse: {
      id: string
      deleted: boolean
      /** @enum {string} */
      object: 'assistant.deleted'
    }
    DeleteFileResponse: {
      id: string
      /** @enum {string} */
      object: 'file'
      deleted: boolean
    }
    DeleteFineTuningCheckpointPermissionResponse: {
      /** @description The ID of the fine-tuned model checkpoint permission that was deleted. */
      id: string
      /**
       * @description The object type, which is always "checkpoint.permission".
       * @enum {string}
       */
      object: 'checkpoint.permission'
      /** @description Whether the fine-tuned model checkpoint permission was successfully deleted. */
      deleted: boolean
    }
    DeleteMessageResponse: {
      id: string
      deleted: boolean
      /** @enum {string} */
      object: 'thread.message.deleted'
    }
    DeleteModelResponse: {
      id: string
      deleted: boolean
      object: string
    }
    DeleteThreadResponse: {
      id: string
      deleted: boolean
      /** @enum {string} */
      object: 'thread.deleted'
    }
    DeleteVectorStoreFileResponse: {
      id: string
      deleted: boolean
      /** @enum {string} */
      object: 'vector_store.file.deleted'
    }
    DeleteVectorStoreResponse: {
      id: string
      deleted: boolean
      /** @enum {string} */
      object: 'vector_store.deleted'
    }
    /** @description Occurs when a stream ends. */
    DoneEvent: {
      /** @enum {string} */
      event: 'done'
      /** @enum {string} */
      data: '[DONE]'
    }
    /**
     * DoubleClick
     * @description A double click action.
     *
     */
    DoubleClick: {
      /**
       * @description Specifies the event type. For a double click action, this property is
       *     always set to `double_click`.
       *
       * @default double_click
       * @enum {string}
       */
      type: 'double_click'
      /** @description The x-coordinate where the double click occurred.
       *      */
      x: number
      /** @description The y-coordinate where the double click occurred.
       *      */
      y: number
    }
    /**
     * Drag
     * @description A drag action.
     *
     */
    Drag: {
      /**
       * @description Specifies the event type. For a drag action, this property is
       *     always set to `drag`.
       *
       * @default drag
       * @enum {string}
       */
      type: 'drag'
      /** @description An array of coordinates representing the path of the drag action. Coordinates will appear as an array
       *     of objects, eg
       *     ```
       *     [
       *       { x: 100, y: 200 },
       *       { x: 200, y: 300 }
       *     ]
       *     ```
       *      */
      path: components['schemas']['Coordinate'][]
    }
    /**
     * Input message
     * @description A message input to the model with a role indicating instruction following
     *     hierarchy. Instructions given with the `developer` or `system` role take
     *     precedence over instructions given with the `user` role. Messages with the
     *     `assistant` role are presumed to have been generated by the model in previous
     *     interactions.
     *
     */
    EasyInputMessage: {
      /**
       * @description The role of the message input. One of `user`, `assistant`, `system`, or
       *     `developer`.
       *
       * @enum {string}
       */
      role: 'user' | 'assistant' | 'system' | 'developer'
      /** @description Text, image, or audio input to the model, used to generate a response.
       *     Can also contain previous assistant responses.
       *      */
      content: string | components['schemas']['InputMessageContentList']
      /**
       * @description The type of the message input. Always `message`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'EasyInputMessage'
    }
    /** @description Represents an embedding vector returned by embedding endpoint.
     *      */
    Embedding: {
      /** @description The index of the embedding in the list of embeddings. */
      index: number
      /** @description The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](/docs/guides/embeddings).
       *      */
      embedding: number[]
      /**
       * @description The object type, which is always "embedding".
       * @enum {string}
       */
      object: 'embedding'
    }
    Error: {
      code: string | null
      message: string
      param: string | null
      type: string
    }
    /** @description Occurs when an [error](/docs/guides/error-codes#api-errors) occurs. This can happen due to an internal server error or a timeout. */
    ErrorEvent: {
      /** @enum {string} */
      event: 'error'
      data: components['schemas']['Error']
    }
    ErrorResponse: {
      error: components['schemas']['Error']
    }
    /**
     * File citation
     * @description A citation to a file.
     *
     */
    FileCitation: {
      /**
       * @description The type of the file citation. Always `file_citation`.
       *
       * @enum {string}
       */
      type: 'file_citation'
      /** @description The index of the file in the list of files.
       *      */
      index: number
      /** @description The ID of the file.
       *      */
      file_id: string
    }
    /**
     * File path
     * @description A path to a file.
     *
     */
    FilePath: {
      /**
       * @description The type of the file path. Always `file_path`.
       *
       * @enum {string}
       */
      type: 'file_path'
      /** @description The ID of the file.
       *      */
      file_id: string
      /** @description The index of the file in the list of files.
       *      */
      index: number
    }
    /**
     * @description The ranker to use for the file search. If not specified will use the `auto` ranker.
     * @enum {string}
     */
    FileSearchRanker: 'auto' | 'default_2024_08_21'
    /**
     * File search tool call ranking options
     * @description The ranking options for the file search. If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.
     *
     *     See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
     *
     */
    FileSearchRankingOptions: {
      ranker?: components['schemas']['FileSearchRanker']
      /** @description The score threshold for the file search. All values must be a floating point number between 0 and 1. */
      score_threshold: number
    }
    /**
     * File search
     * @description A tool that searches for relevant content from uploaded files.
     *     Learn more about the [file search tool](/docs/guides/tools-file-search).
     *
     */
    FileSearchTool: {
      /**
       * @description The type of the file search tool. Always `file_search`.
       *
       * @enum {string}
       */
      type: 'file_search'
      /** @description The IDs of the vector stores to search.
       *      */
      vector_store_ids: string[]
      /** @description The maximum number of results to return. This number should be between 1
       *     and 50 inclusive.
       *      */
      max_num_results?: number
      /** @description A filter to apply based on file attributes. */
      filters?:
        | components['schemas']['ComparisonFilter']
        | components['schemas']['CompoundFilter']
      /** @description Ranking options for search. */
      ranking_options?: {
        /**
         * @description The ranker to use for the file search.
         * @default auto
         * @enum {string}
         */
        ranker: 'auto' | 'default-2024-11-15'
        /**
         * @description The score threshold for the file search, a number between 0 and 1.
         *     Numbers closer to 1 will attempt to return only the most relevant
         *     results, but may return fewer results.
         *
         * @default 0
         */
        score_threshold: number
      }
    }
    /**
     * File search tool call
     * @description The results of a file search tool call. See the
     *     [file search guide](/docs/guides/tools-file-search) for more information.
     *
     */
    FileSearchToolCall: {
      /** @description The unique ID of the file search tool call.
       *      */
      id: string
      /**
       * @description The type of the file search tool call. Always `file_search_call`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'FileSearchToolCall'
      /**
       * @description The status of the file search tool call. One of `in_progress`,
       *     `searching`, `incomplete` or `failed`,
       *
       * @enum {string}
       */
      status:
        | 'in_progress'
        | 'searching'
        | 'completed'
        | 'incomplete'
        | 'failed'
      /** @description The queries used to search for files.
       *      */
      queries: string[]
      /** @description The results of the file search tool call.
       *      */
      results?:
        | {
            /** @description The unique ID of the file.
             *      */
            file_id?: string
            /** @description The text that was retrieved from the file.
             *      */
            text?: string
            /** @description The name of the file.
             *      */
            filename?: string
            attributes?: components['schemas']['VectorStoreFileAttributes']
            /**
             * Format: float
             * @description The relevance score of the file - a value between 0 and 1.
             *
             */
            score?: number
          }[]
        | null
    }
    FineTuneChatCompletionRequestAssistantMessage: {
      /**
       * @description Controls whether the assistant message is trained against (0 or 1)
       * @enum {integer}
       */
      weight?: 0 | 1
    } & WithRequired<
      components['schemas']['ChatCompletionRequestAssistantMessage'],
      'role'
    >
    /** @description The per-line training example of a fine-tuning input file for chat models using the supervised method. */
    FineTuneChatRequestInput: {
      messages?: (
        | components['schemas']['ChatCompletionRequestSystemMessage']
        | components['schemas']['ChatCompletionRequestUserMessage']
        | components['schemas']['FineTuneChatCompletionRequestAssistantMessage']
        | components['schemas']['ChatCompletionRequestToolMessage']
        | components['schemas']['ChatCompletionRequestFunctionMessage']
      )[]
      /** @description A list of tools the model may generate JSON inputs for. */
      tools?: components['schemas']['ChatCompletionTool'][]
      parallel_tool_calls?: components['schemas']['ParallelToolCalls']
      /**
       * @deprecated
       * @description A list of functions the model may generate JSON inputs for.
       */
      functions?: components['schemas']['ChatCompletionFunctions'][]
    }
    /** @description The per-line training example of a fine-tuning input file for completions models */
    FineTuneCompletionRequestInput: {
      /** @description The input prompt for this training example. */
      prompt?: string
      /** @description The desired completion for this training example. */
      completion?: string
    }
    /** @description Configuration for the DPO fine-tuning method. */
    FineTuneDPOMethod: {
      /** @description The hyperparameters used for the fine-tuning job. */
      hyperparameters?: {
        /**
         * @description The beta value for the DPO method. A higher beta value will increase the weight of the penalty between the policy and reference model.
         *
         * @default auto
         */
        beta?: 'auto' | number
        /**
         * @description Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.
         *
         * @default auto
         */
        batch_size?: 'auto' | number
        /**
         * @description Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.
         *
         * @default auto
         */
        learning_rate_multiplier?: 'auto' | number
        /**
         * @description The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
         *
         * @default auto
         */
        n_epochs?: 'auto' | number
      }
    }
    /** @description The method used for fine-tuning. */
    FineTuneMethod: {
      /**
       * @description The type of method. Is either `supervised` or `dpo`.
       * @enum {string}
       */
      type?: 'supervised' | 'dpo'
      supervised?: components['schemas']['FineTuneSupervisedMethod']
      dpo?: components['schemas']['FineTuneDPOMethod']
    }
    /** @description The per-line training example of a fine-tuning input file for chat models using the dpo method. */
    FineTunePreferenceRequestInput: {
      input?: {
        messages?: (
          | components['schemas']['ChatCompletionRequestSystemMessage']
          | components['schemas']['ChatCompletionRequestUserMessage']
          | components['schemas']['FineTuneChatCompletionRequestAssistantMessage']
          | components['schemas']['ChatCompletionRequestToolMessage']
          | components['schemas']['ChatCompletionRequestFunctionMessage']
        )[]
        /** @description A list of tools the model may generate JSON inputs for. */
        tools?: components['schemas']['ChatCompletionTool'][]
        parallel_tool_calls?: components['schemas']['ParallelToolCalls']
      }
      /** @description The preferred completion message for the output. */
      preferred_completion?: components['schemas']['ChatCompletionRequestAssistantMessage'][]
      /** @description The non-preferred completion message for the output. */
      non_preferred_completion?: components['schemas']['ChatCompletionRequestAssistantMessage'][]
    }
    /** @description Configuration for the supervised fine-tuning method. */
    FineTuneSupervisedMethod: {
      /** @description The hyperparameters used for the fine-tuning job. */
      hyperparameters?: {
        /**
         * @description Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.
         *
         * @default auto
         */
        batch_size?: 'auto' | number
        /**
         * @description Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.
         *
         * @default auto
         */
        learning_rate_multiplier?: 'auto' | number
        /**
         * @description The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
         *
         * @default auto
         */
        n_epochs?: 'auto' | number
      }
    }
    /**
     * FineTuningCheckpointPermission
     * @description The `checkpoint.permission` object represents a permission for a fine-tuned model checkpoint.
     *
     */
    FineTuningCheckpointPermission: {
      /** @description The permission identifier, which can be referenced in the API endpoints. */
      id: string
      /** @description The Unix timestamp (in seconds) for when the permission was created. */
      created_at: number
      /** @description The project identifier that the permission is for. */
      project_id: string
      /**
       * @description The object type, which is always "checkpoint.permission".
       * @enum {string}
       */
      object: 'checkpoint.permission'
    }
    /** Fine-Tuning Job Integration */
    FineTuningIntegration: {
      /**
       * @description The type of the integration being enabled for the fine-tuning job
       * @enum {string}
       */
      type: 'wandb'
      /** @description The settings for your integration with Weights and Biases. This payload specifies the project that
       *     metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
       *     to your run, and set a default entity (team, username, etc) to be associated with your run.
       *      */
      wandb: {
        /**
         * @description The name of the project that the new run will be created under.
         *
         * @example my-wandb-project
         */
        project: string
        /** @description A display name to set for the run. If not set, we will use the Job ID as the name.
         *      */
        name?: string | null
        /** @description The entity to use for the run. This allows you to set the team or username of the WandB user that you would
         *     like associated with the run. If not set, the default entity for the registered WandB API key is used.
         *      */
        entity?: string | null
        /** @description A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
         *     default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
         *      */
        tags?: string[]
      }
    }
    /**
     * FineTuningJob
     * @description The `fine_tuning.job` object represents a fine-tuning job that has been created through the API.
     *
     */
    FineTuningJob: {
      /** @description The object identifier, which can be referenced in the API endpoints. */
      id: string
      /** @description The Unix timestamp (in seconds) for when the fine-tuning job was created. */
      created_at: number
      /** @description For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure. */
      error: {
        /** @description A machine-readable error code. */
        code: string
        /** @description A human-readable error message. */
        message: string
        /** @description The parameter that was invalid, usually `training_file` or `validation_file`. This field will be null if the failure was not parameter-specific. */
        param: string | null
      } | null
      /** @description The name of the fine-tuned model that is being created. The value will be null if the fine-tuning job is still running. */
      fine_tuned_model: string | null
      /** @description The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be null if the fine-tuning job is still running. */
      finished_at: number | null
      /** @description The hyperparameters used for the fine-tuning job. This value will only be returned when running `supervised` jobs. */
      hyperparameters: {
        /**
         * @description Number of examples in each batch. A larger batch size means that model parameters
         *     are updated less frequently, but with lower variance.
         *
         * @default auto
         */
        batch_size?: 'auto' | number
        /**
         * @description Scaling factor for the learning rate. A smaller learning rate may be useful to avoid
         *     overfitting.
         *
         * @default auto
         */
        learning_rate_multiplier?: 'auto' | number
        /**
         * @description The number of epochs to train the model for. An epoch refers to one full cycle
         *     through the training dataset.
         *
         * @default auto
         */
        n_epochs?: 'auto' | number
      }
      /** @description The base model that is being fine-tuned. */
      model: string
      /**
       * @description The object type, which is always "fine_tuning.job".
       * @enum {string}
       */
      object: 'fine_tuning.job'
      /** @description The organization that owns the fine-tuning job. */
      organization_id: string
      /** @description The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the [Files API](/docs/api-reference/files/retrieve-contents). */
      result_files: string[]
      /**
       * @description The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.
       * @enum {string}
       */
      status:
        | 'validating_files'
        | 'queued'
        | 'running'
        | 'succeeded'
        | 'failed'
        | 'cancelled'
      /** @description The total number of billable tokens processed by this fine-tuning job. The value will be null if the fine-tuning job is still running. */
      trained_tokens: number | null
      /** @description The file ID used for training. You can retrieve the training data with the [Files API](/docs/api-reference/files/retrieve-contents). */
      training_file: string
      /** @description The file ID used for validation. You can retrieve the validation results with the [Files API](/docs/api-reference/files/retrieve-contents). */
      validation_file: string | null
      /** @description A list of integrations to enable for this fine-tuning job. */
      integrations?: components['schemas']['FineTuningIntegration'][] | null
      /** @description The seed used for the fine-tuning job. */
      seed: number
      /** @description The Unix timestamp (in seconds) for when the fine-tuning job is estimated to finish. The value will be null if the fine-tuning job is not running. */
      estimated_finish?: number | null
      method?: components['schemas']['FineTuneMethod']
      metadata?: components['schemas']['Metadata']
    }
    /**
     * FineTuningJobCheckpoint
     * @description The `fine_tuning.job.checkpoint` object represents a model checkpoint for a fine-tuning job that is ready to use.
     *
     */
    FineTuningJobCheckpoint: {
      /** @description The checkpoint identifier, which can be referenced in the API endpoints. */
      id: string
      /** @description The Unix timestamp (in seconds) for when the checkpoint was created. */
      created_at: number
      /** @description The name of the fine-tuned checkpoint model that is created. */
      fine_tuned_model_checkpoint: string
      /** @description The step number that the checkpoint was created at. */
      step_number: number
      /** @description Metrics at the step number during the fine-tuning job. */
      metrics: {
        step?: number
        train_loss?: number
        train_mean_token_accuracy?: number
        valid_loss?: number
        valid_mean_token_accuracy?: number
        full_valid_loss?: number
        full_valid_mean_token_accuracy?: number
      }
      /** @description The name of the fine-tuning job that this checkpoint was created from. */
      fine_tuning_job_id: string
      /**
       * @description The object type, which is always "fine_tuning.job.checkpoint".
       * @enum {string}
       */
      object: 'fine_tuning.job.checkpoint'
    }
    /** @description Fine-tuning job event object */
    FineTuningJobEvent: {
      /**
       * @description The object type, which is always "fine_tuning.job.event".
       * @enum {string}
       */
      object: 'fine_tuning.job.event'
      /** @description The object identifier. */
      id: string
      /** @description The Unix timestamp (in seconds) for when the fine-tuning job was created. */
      created_at: number
      /**
       * @description The log level of the event.
       * @enum {string}
       */
      level: 'info' | 'warn' | 'error'
      /** @description The message of the event. */
      message: string
      /**
       * @description The type of event.
       * @enum {string}
       */
      type?: 'message' | 'metrics'
      /** @description The data associated with the event. */
      data?: Record<string, never>
    }
    FunctionObject: {
      /** @description A description of what the function does, used by the model to choose when and how to call the function. */
      description?: string
      /** @description The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
      name: string
      parameters?: components['schemas']['FunctionParameters']
      /**
       * @description Whether to enable strict schema adherence when generating the function call. If set to true, the model will follow the exact schema defined in the `parameters` field. Only a subset of JSON Schema is supported when `strict` is `true`. Learn more about Structured Outputs in the [function calling guide](docs/guides/function-calling).
       * @default false
       */
      strict: boolean | null
    }
    /** @description The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
     *
     *     Omitting `parameters` defines a function with an empty parameter list. */
    FunctionParameters: {
      [key: string]: unknown
    }
    /**
     * Function
     * @description Defines a function in your own code the model can choose to call. Learn more
     *     about [function calling](/docs/guides/function-calling).
     *
     */
    FunctionTool: {
      /**
       * @description The type of the function tool. Always `function`.
       *
       * @enum {string}
       */
      type: 'function'
      /** @description The name of the function to call.
       *      */
      name: string
      /** @description A description of the function. Used by the model to determine whether
       *     or not to call the function.
       *      */
      description?: string | null
      /** @description A JSON schema object describing the parameters of the function.
       *      */
      parameters: {
        [key: string]: unknown
      }
      /** @description Whether to enforce strict parameter validation. Default `true`.
       *      */
      strict: boolean
    }
    /**
     * Function tool call
     * @description A tool call to run a function. See the
     *     [function calling guide](/docs/guides/function-calling) for more information.
     *
     */
    FunctionToolCall: {
      /** @description The unique ID of the function tool call.
       *      */
      id?: string
      /**
       * @description The type of the function tool call. Always `function_call`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'FunctionToolCall'
      /** @description The unique ID of the function tool call generated by the model.
       *      */
      call_id: string
      /** @description The name of the function to run.
       *      */
      name: string
      /** @description A JSON string of the arguments to pass to the function.
       *      */
      arguments: string
      /**
       * @description The status of the item. One of `in_progress`, `completed`, or
       *     `incomplete`. Populated when items are returned via API.
       *
       * @enum {string}
       */
      status?: 'in_progress' | 'completed' | 'incomplete'
    }
    /**
     * Function tool call output
     * @description The output of a function tool call.
     *
     */
    FunctionToolCallOutput: {
      /** @description The unique ID of the function tool call output. Populated when this item
       *     is returned via API.
       *      */
      id?: string
      /**
       * @description The type of the function tool call output. Always `function_call_output`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'FunctionToolCallOutput'
      /** @description The unique ID of the function tool call generated by the model.
       *      */
      call_id: string
      /** @description A JSON string of the output of the function tool call.
       *      */
      output: string
      /**
       * @description The status of the item. One of `in_progress`, `completed`, or
       *     `incomplete`. Populated when items are returned via API.
       *
       * @enum {string}
       */
      status?: 'in_progress' | 'completed' | 'incomplete'
    }
    FunctionToolCallOutputResource: components['schemas']['FunctionToolCallOutput'] & {
      /** @description The unique ID of the function call tool output.
       *      */
      id: string
    } & {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'FunctionToolCallOutputResource'
    }
    FunctionToolCallResource: components['schemas']['FunctionToolCall'] & {
      /** @description The unique ID of the function tool call.
       *      */
      id: string
    } & {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'FunctionToolCallResource'
    }
    /** @description Represents the url or the content of an image generated by the OpenAI API. */
    Image: {
      /** @description The base64-encoded JSON of the generated image, if `response_format` is `b64_json`. */
      b64_json?: string
      /** @description The URL of the generated image, if `response_format` is `url` (default). */
      url?: string
      /** @description The prompt that was used to generate the image, if there was any revision to the prompt. */
      revised_prompt?: string
    }
    ImagesResponse: {
      created: number
      data: components['schemas']['Image'][]
    }
    /**
     * @description Specify additional output data to include in the model response. Currently
     *     supported values are:
     *     - `file_search_call.results`: Include the search results of
     *       the file search tool call.
     *     - `message.input_image.image_url`: Include image urls from the input message.
     *     - `computer_call_output.output.image_url`: Include image urls from the computer call output.
     *
     * @enum {string}
     */
    Includable:
      | 'file_search_call.results'
      | 'message.input_image.image_url'
      | 'computer_call_output.output.image_url'
    /**
     * Audio input
     * @description An audio input to the model.
     *
     */
    InputAudio: {
      /**
       * @description The type of the input item. Always `input_audio`.
       *
       * @enum {string}
       */
      type: 'input_audio'
      /** @description Base64-encoded audio data.
       *      */
      data: string
      /**
       * @description The format of the audio data. Currently supported formats are `mp3` and
       *     `wav`.
       *
       * @enum {string}
       */
      format: 'mp3' | 'wav'
    }
    InputContent:
      | components['schemas']['InputText']
      | components['schemas']['InputImage']
      | components['schemas']['InputFile']
    /**
     * File input
     * @description A file input to the model.
     *
     */
    InputFile: {
      /**
       * @description The type of the input item. Always `input_file`.
       *
       * @enum {string}
       */
      type: 'input_file'
      /** @description The ID of the file to be sent to the model.
       *      */
      file_id?: string
      /** @description The name of the file to be sent to the model.
       *      */
      filename?: string
      /** @description The content of the file to be sent to the model.
       *      */
      file_data?: string
    }
    /**
     * Image input
     * @description An image input to the model. Learn about [image inputs](/docs/guides/vision).
     *
     */
    InputImage: {
      /**
       * @description The type of the input item. Always `input_image`.
       *
       * @enum {string}
       */
      type: 'input_image'
      /** @description The URL of the image to be sent to the model. A fully qualified URL or
       *     base64 encoded image in a data URL.
       *      */
      image_url?: string | null
      /** @description The ID of the file to be sent to the model.
       *      */
      file_id?: string | null
      /**
       * @description The detail level of the image to be sent to the model. One of `high`,
       *     `low`, or `auto`. Defaults to `auto`.
       *
       * @default auto
       * @enum {string}
       */
      detail: 'high' | 'low' | 'auto'
    }
    InputItem:
      | components['schemas']['EasyInputMessage']
      | components['schemas']['Item']
      | components['schemas']['ItemReference']
    /**
     * Input message
     * @description A message input to the model with a role indicating instruction following
     *     hierarchy. Instructions given with the `developer` or `system` role take
     *     precedence over instructions given with the `user` role.
     *
     */
    InputMessage: {
      /**
       * @description The type of the message input. Always set to `message`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'InputMessage'
      /**
       * @description The role of the message input. One of `user`, `system`, or `developer`.
       *
       * @enum {string}
       */
      role: 'user' | 'system' | 'developer'
      /**
       * @description The status of item. One of `in_progress`, `completed`, or
       *     `incomplete`. Populated when items are returned via API.
       *
       * @enum {string}
       */
      status?: 'in_progress' | 'completed' | 'incomplete'
      content: components['schemas']['InputMessageContentList']
    }
    /**
     * Input item content list
     * @description A list of one or many input items to the model, containing different content
     *     types.
     *
     */
    InputMessageContentList: components['schemas']['InputContent'][]
    InputMessageResource: components['schemas']['InputMessage'] & {
      /** @description The unique ID of the message input.
       *      */
      id: string
    } & {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'InputMessageResource'
    }
    /**
     * Text input
     * @description A text input to the model.
     *
     */
    InputText: {
      /**
       * @description The type of the input item. Always `input_text`.
       *
       * @enum {string}
       */
      type: 'input_text'
      /** @description The text input to the model.
       *      */
      text: string
    }
    /** @description Represents an individual `invite` to the organization. */
    Invite: {
      /**
       * @description The object type, which is always `organization.invite`
       * @enum {string}
       */
      object: 'organization.invite'
      /** @description The identifier, which can be referenced in API endpoints */
      id: string
      /** @description The email address of the individual to whom the invite was sent */
      email: string
      /**
       * @description `owner` or `reader`
       * @enum {string}
       */
      role: 'owner' | 'reader'
      /**
       * @description `accepted`,`expired`, or `pending`
       * @enum {string}
       */
      status: 'accepted' | 'expired' | 'pending'
      /** @description The Unix timestamp (in seconds) of when the invite was sent. */
      invited_at: number
      /** @description The Unix timestamp (in seconds) of when the invite expires. */
      expires_at: number
      /** @description The Unix timestamp (in seconds) of when the invite was accepted. */
      accepted_at?: number
      /** @description The projects that were granted membership upon acceptance of the invite. */
      projects?: {
        /** @description Project's public ID */
        id?: string
        /**
         * @description Project membership role
         * @enum {string}
         */
        role?: 'member' | 'owner'
      }[]
    }
    InviteDeleteResponse: {
      /**
       * @description The object type, which is always `organization.invite.deleted`
       * @enum {string}
       */
      object: 'organization.invite.deleted'
      id: string
      deleted: boolean
    }
    InviteListResponse: {
      /**
       * @description The object type, which is always `list`
       * @enum {string}
       */
      object: 'list'
      data: components['schemas']['Invite'][]
      /** @description The first `invite_id` in the retrieved `list` */
      first_id?: string
      /** @description The last `invite_id` in the retrieved `list` */
      last_id?: string
      /** @description The `has_more` property is used for pagination to indicate there are additional results. */
      has_more?: boolean
    }
    InviteRequest: {
      /** @description Send an email to this address */
      email: string
      /**
       * @description `owner` or `reader`
       * @enum {string}
       */
      role: 'reader' | 'owner'
      /** @description An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior. */
      projects?: {
        /** @description Project's public ID */
        id: string
        /**
         * @description Project membership role
         * @enum {string}
         */
        role: 'member' | 'owner'
      }[]
    }
    /** @description Content item used to generate a response.
     *      */
    Item: {
      /**
       * @description discriminator enum property added by openapi-typescript
       * @enum {string}
       */
      type: 'Item'
    } & (
      | components['schemas']['InputMessage']
      | components['schemas']['OutputMessage']
      | components['schemas']['FileSearchToolCall']
      | components['schemas']['ComputerToolCall']
      | components['schemas']['ComputerToolCallOutput']
      | components['schemas']['WebSearchToolCall']
      | components['schemas']['FunctionToolCall']
      | components['schemas']['FunctionToolCallOutput']
      | components['schemas']['ReasoningItem']
    )
    /**
     * Item reference
     * @description An internal identifier for an item to reference.
     *
     */
    ItemReference: {
      /** @description The ID of the item to reference.
       *      */
      id: string
      /**
       * @description The type of item to reference. Always `item_reference`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'ItemReference'
    }
    /** @description Content item used to generate a response.
     *      */
    ItemResource:
      | components['schemas']['InputMessageResource']
      | components['schemas']['OutputMessage']
      | components['schemas']['FileSearchToolCall']
      | components['schemas']['ComputerToolCall']
      | components['schemas']['ComputerToolCallOutputResource']
      | components['schemas']['WebSearchToolCall']
      | components['schemas']['FunctionToolCallResource']
      | components['schemas']['FunctionToolCallOutputResource']
    /**
     * KeyPress
     * @description A collection of keypresses the model would like to perform.
     *
     */
    KeyPress: {
      /**
       * @description Specifies the event type. For a keypress action, this property is
       *     always set to `keypress`.
       *
       * @default keypress
       * @enum {string}
       */
      type: 'keypress'
      /** @description The combination of keys the model is requesting to be pressed. This is an
       *     array of strings, each representing a key.
       *      */
      keys: string[]
    }
    ListAssistantsResponse: {
      /** @example list */
      object: string
      data: components['schemas']['AssistantObject'][]
      /** @example asst_abc123 */
      first_id: string
      /** @example asst_abc456 */
      last_id: string
      /** @example false */
      has_more: boolean
    }
    ListAuditLogsResponse: {
      /** @enum {string} */
      object: 'list'
      data: components['schemas']['AuditLog'][]
      /** @example audit_log-defb456h8dks */
      first_id: string
      /** @example audit_log-hnbkd8s93s */
      last_id: string
      has_more: boolean
    }
    ListBatchesResponse: {
      data: components['schemas']['Batch'][]
      /** @example batch_abc123 */
      first_id?: string
      /** @example batch_abc456 */
      last_id?: string
      has_more: boolean
      /** @enum {string} */
      object: 'list'
    }
    ListFilesResponse: {
      /** @example list */
      object: string
      data: components['schemas']['OpenAIFile'][]
      /** @example file-abc123 */
      first_id: string
      /** @example file-abc456 */
      last_id: string
      /** @example false */
      has_more: boolean
    }
    ListFineTuningCheckpointPermissionResponse: {
      data: components['schemas']['FineTuningCheckpointPermission'][]
      /** @enum {string} */
      object: 'list'
      first_id?: string | null
      last_id?: string | null
      has_more: boolean
    }
    ListFineTuningJobCheckpointsResponse: {
      data: components['schemas']['FineTuningJobCheckpoint'][]
      /** @enum {string} */
      object: 'list'
      first_id?: string | null
      last_id?: string | null
      has_more: boolean
    }
    ListFineTuningJobEventsResponse: {
      data: components['schemas']['FineTuningJobEvent'][]
      /** @enum {string} */
      object: 'list'
      has_more: boolean
    }
    ListMessagesResponse: {
      /** @example list */
      object: string
      data: components['schemas']['MessageObject'][]
      /** @example msg_abc123 */
      first_id: string
      /** @example msg_abc123 */
      last_id: string
      /** @example false */
      has_more: boolean
    }
    ListModelsResponse: {
      /** @enum {string} */
      object: 'list'
      data: components['schemas']['Model'][]
    }
    ListPaginatedFineTuningJobsResponse: {
      data: components['schemas']['FineTuningJob'][]
      has_more: boolean
      /** @enum {string} */
      object: 'list'
    }
    ListRunStepsResponse: {
      /** @example list */
      object: string
      data: components['schemas']['RunStepObject'][]
      /** @example step_abc123 */
      first_id: string
      /** @example step_abc456 */
      last_id: string
      /** @example false */
      has_more: boolean
    }
    ListRunsResponse: {
      /** @example list */
      object: string
      data: components['schemas']['RunObject'][]
      /** @example run_abc123 */
      first_id: string
      /** @example run_abc456 */
      last_id: string
      /** @example false */
      has_more: boolean
    }
    ListThreadsResponse: {
      /** @example list */
      object: string
      data: components['schemas']['ThreadObject'][]
      /** @example asst_abc123 */
      first_id: string
      /** @example asst_abc456 */
      last_id: string
      /** @example false */
      has_more: boolean
    }
    ListVectorStoreFilesResponse: {
      /** @example list */
      object: string
      data: components['schemas']['VectorStoreFileObject'][]
      /** @example file-abc123 */
      first_id: string
      /** @example file-abc456 */
      last_id: string
      /** @example false */
      has_more: boolean
    }
    ListVectorStoresResponse: {
      /** @example list */
      object: string
      data: components['schemas']['VectorStoreObject'][]
      /** @example vs_abc123 */
      first_id: string
      /** @example vs_abc456 */
      last_id: string
      /** @example false */
      has_more: boolean
    }
    LogProb: components['schemas']['LogProbProperties'] & {
      top_logprobs?: components['schemas']['LogProbProperties'][] | null
    }
    /** @description A log probability object.
     *      */
    LogProbProperties: {
      /** @description The token that was used to generate the log probability.
       *      */
      token: string
      /** @description The log probability of the token.
       *      */
      logprob: number
      /** @description The bytes that were used to generate the log probability.
       *      */
      bytes: number[]
    }
    /**
     * Image file
     * @description References an image [File](/docs/api-reference/files) in the content of a message.
     */
    MessageContentImageFileObject: {
      /**
       * @description Always `image_file`.
       * @enum {string}
       */
      type: 'image_file'
      image_file: {
        /** @description The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content. */
        file_id: string
        /**
         * @description Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`.
         * @default auto
         * @enum {string}
         */
        detail: 'auto' | 'low' | 'high'
      }
    }
    /**
     * Image URL
     * @description References an image URL in the content of a message.
     */
    MessageContentImageUrlObject: {
      /**
       * @description The type of the content part.
       * @enum {string}
       */
      type: 'image_url'
      image_url: {
        /**
         * Format: uri
         * @description The external URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp.
         */
        url: string
        /**
         * @description Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`. Default value is `auto`
         * @default auto
         * @enum {string}
         */
        detail: 'auto' | 'low' | 'high'
      }
    }
    /**
     * Refusal
     * @description The refusal content generated by the assistant.
     */
    MessageContentRefusalObject: {
      /**
       * @description Always `refusal`.
       * @enum {string}
       */
      type: 'refusal'
      refusal: string
    }
    /**
     * File citation
     * @description A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files.
     */
    MessageContentTextAnnotationsFileCitationObject: {
      /**
       * @description Always `file_citation`.
       * @enum {string}
       */
      type: 'file_citation'
      /** @description The text in the message content that needs to be replaced. */
      text: string
      file_citation: {
        /** @description The ID of the specific File the citation is from. */
        file_id: string
      }
      start_index: number
      end_index: number
    }
    /**
     * File path
     * @description A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file.
     */
    MessageContentTextAnnotationsFilePathObject: {
      /**
       * @description Always `file_path`.
       * @enum {string}
       */
      type: 'file_path'
      /** @description The text in the message content that needs to be replaced. */
      text: string
      file_path: {
        /** @description The ID of the file that was generated. */
        file_id: string
      }
      start_index: number
      end_index: number
    }
    /**
     * Text
     * @description The text content that is part of a message.
     */
    MessageContentTextObject: {
      /**
       * @description Always `text`.
       * @enum {string}
       */
      type: 'text'
      text: {
        /** @description The data that makes up the text. */
        value: string
        annotations: (
          | components['schemas']['MessageContentTextAnnotationsFileCitationObject']
          | components['schemas']['MessageContentTextAnnotationsFilePathObject']
        )[]
      }
    }
    /**
     * Image file
     * @description References an image [File](/docs/api-reference/files) in the content of a message.
     */
    MessageDeltaContentImageFileObject: {
      /** @description The index of the content part in the message. */
      index: number
      /**
       * @description Always `image_file`.
       * @enum {string}
       */
      type: 'image_file'
      image_file?: {
        /** @description The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content. */
        file_id?: string
        /**
         * @description Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`.
         * @default auto
         * @enum {string}
         */
        detail: 'auto' | 'low' | 'high'
      }
    }
    /**
     * Image URL
     * @description References an image URL in the content of a message.
     */
    MessageDeltaContentImageUrlObject: {
      /** @description The index of the content part in the message. */
      index: number
      /**
       * @description Always `image_url`.
       * @enum {string}
       */
      type: 'image_url'
      image_url?: {
        /** @description The URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp. */
        url?: string
        /**
         * @description Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`.
         * @default auto
         * @enum {string}
         */
        detail: 'auto' | 'low' | 'high'
      }
    }
    /**
     * Refusal
     * @description The refusal content that is part of a message.
     */
    MessageDeltaContentRefusalObject: {
      /** @description The index of the refusal part in the message. */
      index: number
      /**
       * @description Always `refusal`.
       * @enum {string}
       */
      type: 'refusal'
      refusal?: string
    }
    /**
     * File citation
     * @description A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files.
     */
    MessageDeltaContentTextAnnotationsFileCitationObject: {
      /** @description The index of the annotation in the text content part. */
      index: number
      /**
       * @description Always `file_citation`.
       * @enum {string}
       */
      type: 'file_citation'
      /** @description The text in the message content that needs to be replaced. */
      text?: string
      file_citation?: {
        /** @description The ID of the specific File the citation is from. */
        file_id?: string
        /** @description The specific quote in the file. */
        quote?: string
      }
      start_index?: number
      end_index?: number
    }
    /**
     * File path
     * @description A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file.
     */
    MessageDeltaContentTextAnnotationsFilePathObject: {
      /** @description The index of the annotation in the text content part. */
      index: number
      /**
       * @description Always `file_path`.
       * @enum {string}
       */
      type: 'file_path'
      /** @description The text in the message content that needs to be replaced. */
      text?: string
      file_path?: {
        /** @description The ID of the file that was generated. */
        file_id?: string
      }
      start_index?: number
      end_index?: number
    }
    /**
     * Text
     * @description The text content that is part of a message.
     */
    MessageDeltaContentTextObject: {
      /** @description The index of the content part in the message. */
      index: number
      /**
       * @description Always `text`.
       * @enum {string}
       */
      type: 'text'
      text?: {
        /** @description The data that makes up the text. */
        value?: string
        annotations?: (
          | components['schemas']['MessageDeltaContentTextAnnotationsFileCitationObject']
          | components['schemas']['MessageDeltaContentTextAnnotationsFilePathObject']
        )[]
      }
    }
    /**
     * Message delta object
     * @description Represents a message delta i.e. any changed fields on a message during streaming.
     *
     */
    MessageDeltaObject: {
      /** @description The identifier of the message, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `thread.message.delta`.
       * @enum {string}
       */
      object: 'thread.message.delta'
      /** @description The delta containing the fields that have changed on the Message. */
      delta: {
        /**
         * @description The entity that produced the message. One of `user` or `assistant`.
         * @enum {string}
         */
        role?: 'user' | 'assistant'
        /** @description The content of the message in array of text and/or images. */
        content?: (
          | components['schemas']['MessageDeltaContentImageFileObject']
          | components['schemas']['MessageDeltaContentTextObject']
          | components['schemas']['MessageDeltaContentRefusalObject']
          | components['schemas']['MessageDeltaContentImageUrlObject']
        )[]
      }
    }
    /**
     * The message object
     * @description Represents a message within a [thread](/docs/api-reference/threads).
     */
    MessageObject: {
      /** @description The identifier, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `thread.message`.
       * @enum {string}
       */
      object: 'thread.message'
      /** @description The Unix timestamp (in seconds) for when the message was created. */
      created_at: number
      /** @description The [thread](/docs/api-reference/threads) ID that this message belongs to. */
      thread_id: string
      /**
       * @description The status of the message, which can be either `in_progress`, `incomplete`, or `completed`.
       * @enum {string}
       */
      status: 'in_progress' | 'incomplete' | 'completed'
      /** @description On an incomplete message, details about why the message is incomplete. */
      incomplete_details: {
        /**
         * @description The reason the message is incomplete.
         * @enum {string}
         */
        reason:
          | 'content_filter'
          | 'max_tokens'
          | 'run_cancelled'
          | 'run_expired'
          | 'run_failed'
      } | null
      /** @description The Unix timestamp (in seconds) for when the message was completed. */
      completed_at: number | null
      /** @description The Unix timestamp (in seconds) for when the message was marked as incomplete. */
      incomplete_at: number | null
      /**
       * @description The entity that produced the message. One of `user` or `assistant`.
       * @enum {string}
       */
      role: 'user' | 'assistant'
      /** @description The content of the message in array of text and/or images. */
      content: (
        | components['schemas']['MessageContentImageFileObject']
        | components['schemas']['MessageContentImageUrlObject']
        | components['schemas']['MessageContentTextObject']
        | components['schemas']['MessageContentRefusalObject']
      )[]
      /** @description If applicable, the ID of the [assistant](/docs/api-reference/assistants) that authored this message. */
      assistant_id: string | null
      /** @description The ID of the [run](/docs/api-reference/runs) associated with the creation of this message. Value is `null` when messages are created manually using the create message or create thread endpoints. */
      run_id: string | null
      /** @description A list of files attached to the message, and the tools they were added to. */
      attachments:
        | {
            /** @description The ID of the file to attach to the message. */
            file_id?: string
            /** @description The tools to add this file to. */
            tools?: (
              | components['schemas']['AssistantToolsCode']
              | components['schemas']['AssistantToolsFileSearchTypeOnly']
            )[]
          }[]
        | null
      metadata: components['schemas']['Metadata']
    }
    /**
     * Text
     * @description The text content that is part of a message.
     */
    MessageRequestContentTextObject: {
      /**
       * @description Always `text`.
       * @enum {string}
       */
      type: 'text'
      /** @description Text content to be sent to the model */
      text: string
    }
    MessageStreamEvent:
      | {
          /** @enum {string} */
          event: 'thread.message.created'
          data: components['schemas']['MessageObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.message.in_progress'
          data: components['schemas']['MessageObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.message.delta'
          data: components['schemas']['MessageDeltaObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.message.completed'
          data: components['schemas']['MessageObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.message.incomplete'
          data: components['schemas']['MessageObject']
        }
    /** @description Set of 16 key-value pairs that can be attached to an object. This can be
     *     useful for storing additional information about the object in a structured
     *     format, and querying for objects via API or the dashboard.
     *
     *     Keys are strings with a maximum length of 64 characters. Values are strings
     *     with a maximum length of 512 characters.
     *      */
    Metadata: {
      [key: string]: string
    } | null
    /**
     * Model
     * @description Describes an OpenAI model offering that can be used with the API.
     */
    Model: {
      /** @description The model identifier, which can be referenced in the API endpoints. */
      id: string
      /** @description The Unix timestamp (in seconds) when the model was created. */
      created: number
      /**
       * @description The object type, which is always "model".
       * @enum {string}
       */
      object: 'model'
      /** @description The organization that owns the model. */
      owned_by: string
    }
    ModelIds:
      | components['schemas']['ModelIdsShared']
      | components['schemas']['ModelIdsResponses']
    /** @example gpt-4o */
    ModelIdsResponses:
      | components['schemas']['ModelIdsShared']
      | (
          | 'o1-pro'
          | 'o1-pro-2025-03-19'
          | 'computer-use-preview'
          | 'computer-use-preview-2025-03-11'
        )
    /** @example gpt-4o */
    ModelIdsShared:
      | string
      | (
          | 'o3-mini'
          | 'o3-mini-2025-01-31'
          | 'o1'
          | 'o1-2024-12-17'
          | 'o1-preview'
          | 'o1-preview-2024-09-12'
          | 'o1-mini'
          | 'o1-mini-2024-09-12'
          | 'gpt-4o'
          | 'gpt-4o-2024-11-20'
          | 'gpt-4o-2024-08-06'
          | 'gpt-4o-2024-05-13'
          | 'gpt-4o-audio-preview'
          | 'gpt-4o-audio-preview-2024-10-01'
          | 'gpt-4o-audio-preview-2024-12-17'
          | 'gpt-4o-mini-audio-preview'
          | 'gpt-4o-mini-audio-preview-2024-12-17'
          | 'gpt-4o-search-preview'
          | 'gpt-4o-mini-search-preview'
          | 'gpt-4o-search-preview-2025-03-11'
          | 'gpt-4o-mini-search-preview-2025-03-11'
          | 'chatgpt-4o-latest'
          | 'gpt-4o-mini'
          | 'gpt-4o-mini-2024-07-18'
          | 'gpt-4-turbo'
          | 'gpt-4-turbo-2024-04-09'
          | 'gpt-4-0125-preview'
          | 'gpt-4-turbo-preview'
          | 'gpt-4-1106-preview'
          | 'gpt-4-vision-preview'
          | 'gpt-4'
          | 'gpt-4-0314'
          | 'gpt-4-0613'
          | 'gpt-4-32k'
          | 'gpt-4-32k-0314'
          | 'gpt-4-32k-0613'
          | 'gpt-3.5-turbo'
          | 'gpt-3.5-turbo-16k'
          | 'gpt-3.5-turbo-0301'
          | 'gpt-3.5-turbo-0613'
          | 'gpt-3.5-turbo-1106'
          | 'gpt-3.5-turbo-0125'
          | 'gpt-3.5-turbo-16k-0613'
        )
    ModelResponseProperties: {
      metadata?: components['schemas']['Metadata']
      /**
       * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
       *     We generally recommend altering this or `top_p` but not both.
       *
       * @default 1
       * @example 1
       */
      temperature: number
      /**
       * @description An alternative to sampling with temperature, called nucleus sampling,
       *     where the model considers the results of the tokens with top_p probability
       *     mass. So 0.1 means only the tokens comprising the top 10% probability mass
       *     are considered.
       *
       *     We generally recommend altering this or `temperature` but not both.
       *
       * @default 1
       * @example 1
       */
      top_p: number
      /**
       * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
       *
       * @example user-1234
       */
      user?: string
    }
    ModifyAssistantRequest: {
      /** @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
       *      */
      model?: string | components['schemas']['AssistantSupportedModels']
      reasoning_effort?: components['schemas']['ReasoningEffort']
      /** @description The name of the assistant. The maximum length is 256 characters.
       *      */
      name?: string | null
      /** @description The description of the assistant. The maximum length is 512 characters.
       *      */
      description?: string | null
      /** @description The system instructions that the assistant uses. The maximum length is 256,000 characters.
       *      */
      instructions?: string | null
      /**
       * @description A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
       *
       * @default []
       */
      tools: (
        | components['schemas']['AssistantToolsCode']
        | components['schemas']['AssistantToolsFileSearch']
        | components['schemas']['AssistantToolsFunction']
      )[]
      /** @description A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
       *      */
      tool_resources?: {
        code_interpreter?: {
          /**
           * @description Overrides the list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
           *
           * @default []
           */
          file_ids: string[]
        }
        file_search?: {
          /** @description Overrides the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
           *      */
          vector_store_ids?: string[]
        }
      } | null
      metadata?: components['schemas']['Metadata']
      /**
       * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
       *
       * @default 1
       * @example 1
       */
      temperature: number
      /**
       * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
       *
       *     We generally recommend altering this or temperature but not both.
       *
       * @default 1
       * @example 1
       */
      top_p: number
      response_format?: components['schemas']['AssistantsApiResponseFormatOption']
    }
    ModifyMessageRequest: {
      metadata?: components['schemas']['Metadata']
    }
    ModifyRunRequest: {
      metadata?: components['schemas']['Metadata']
    }
    ModifyThreadRequest: {
      /** @description A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
       *      */
      tool_resources?: {
        code_interpreter?: {
          /**
           * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
           *
           * @default []
           */
          file_ids: string[]
        }
        file_search?: {
          /** @description The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
           *      */
          vector_store_ids?: string[]
        }
      } | null
      metadata?: components['schemas']['Metadata']
    }
    /**
     * Move
     * @description A mouse move action.
     *
     */
    Move: {
      /**
       * @description Specifies the event type. For a move action, this property is
       *     always set to `move`.
       *
       * @default move
       * @enum {string}
       */
      type: 'move'
      /** @description The x-coordinate to move to.
       *      */
      x: number
      /** @description The y-coordinate to move to.
       *      */
      y: number
    }
    /**
     * OpenAIFile
     * @description The `File` object represents a document that has been uploaded to OpenAI.
     */
    OpenAIFile: {
      /** @description The file identifier, which can be referenced in the API endpoints. */
      id: string
      /** @description The size of the file, in bytes. */
      bytes: number
      /** @description The Unix timestamp (in seconds) for when the file was created. */
      created_at: number
      /** @description The Unix timestamp (in seconds) for when the file will expire. */
      expires_at?: number
      /** @description The name of the file. */
      filename: string
      /**
       * @description The object type, which is always `file`.
       * @enum {string}
       */
      object: 'file'
      /**
       * @description The intended purpose of the file. Supported values are `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results` and `vision`.
       * @enum {string}
       */
      purpose:
        | 'assistants'
        | 'assistants_output'
        | 'batch'
        | 'batch_output'
        | 'fine-tune'
        | 'fine-tune-results'
        | 'vision'
      /**
       * @deprecated
       * @description Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`.
       * @enum {string}
       */
      status: 'uploaded' | 'processed' | 'error'
      /**
       * @deprecated
       * @description Deprecated. For details on why a fine-tuning training file failed validation, see the `error` field on `fine_tuning.job`.
       */
      status_details?: string
    }
    /**
     * Other Chunking Strategy
     * @description This is returned when the chunking strategy is unknown. Typically, this is because the file was indexed before the `chunking_strategy` concept was introduced in the API.
     */
    OtherChunkingStrategyResponseParam: {
      /**
       * @description Always `other`.
       * @enum {string}
       */
      type: 'other'
    }
    /**
     * Output audio
     * @description An audio output from the model.
     *
     */
    OutputAudio: {
      /**
       * @description The type of the output audio. Always `output_audio`.
       *
       * @enum {string}
       */
      type: 'output_audio'
      /** @description Base64-encoded audio data from the model.
       *      */
      data: string
      /** @description The transcript of the audio data from the model.
       *      */
      transcript: string
    }
    OutputContent:
      | components['schemas']['OutputText']
      | components['schemas']['Refusal']
    OutputItem:
      | components['schemas']['OutputMessage']
      | components['schemas']['FileSearchToolCall']
      | components['schemas']['FunctionToolCall']
      | components['schemas']['WebSearchToolCall']
      | components['schemas']['ComputerToolCall']
      | components['schemas']['ReasoningItem']
    /**
     * Output message
     * @description An output message from the model.
     *
     */
    OutputMessage: {
      /** @description The unique ID of the output message.
       *      */
      id: string
      /**
       * @description The type of the output message. Always `message`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'OutputMessage'
      /**
       * @description The role of the output message. Always `assistant`.
       *
       * @enum {string}
       */
      role: 'assistant'
      /** @description The content of the output message.
       *      */
      content: components['schemas']['OutputContent'][]
      /**
       * @description The status of the message input. One of `in_progress`, `completed`, or
       *     `incomplete`. Populated when input items are returned via API.
       *
       * @enum {string}
       */
      status: 'in_progress' | 'completed' | 'incomplete'
    }
    /**
     * Output text
     * @description A text output from the model.
     *
     */
    OutputText: {
      /**
       * @description The type of the output text. Always `output_text`.
       *
       * @enum {string}
       */
      type: 'output_text'
      /** @description The text output from the model.
       *      */
      text: string
      /** @description The annotations of the text output.
       *      */
      annotations: components['schemas']['Annotation'][]
    }
    /**
     * @description Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use.
     * @default true
     */
    ParallelToolCalls: boolean
    /**
     * Static Content
     * @description Static predicted output content, such as the content of a text file that is
     *     being regenerated.
     *
     */
    PredictionContent: {
      /**
       * @description The type of the predicted content you want to provide. This type is
       *     currently always `content`.
       *
       * @enum {string}
       */
      type: 'content'
      /** @description The content that should be matched when generating a model response.
       *     If generated tokens would match this content, the entire model response
       *     can be returned much more quickly.
       *      */
      content:
        | string
        | components['schemas']['ChatCompletionRequestMessageContentPartText'][]
    }
    /** @description Represents an individual project. */
    Project: {
      /** @description The identifier, which can be referenced in API endpoints */
      id: string
      /**
       * @description The object type, which is always `organization.project`
       * @enum {string}
       */
      object: 'organization.project'
      /** @description The name of the project. This appears in reporting. */
      name: string
      /** @description The Unix timestamp (in seconds) of when the project was created. */
      created_at: number
      /** @description The Unix timestamp (in seconds) of when the project was archived or `null`. */
      archived_at?: number | null
      /**
       * @description `active` or `archived`
       * @enum {string}
       */
      status: 'active' | 'archived'
    }
    /** @description Represents an individual API key in a project. */
    ProjectApiKey: {
      /**
       * @description The object type, which is always `organization.project.api_key`
       * @enum {string}
       */
      object: 'organization.project.api_key'
      /** @description The redacted value of the API key */
      redacted_value: string
      /** @description The name of the API key */
      name: string
      /** @description The Unix timestamp (in seconds) of when the API key was created */
      created_at: number
      /** @description The identifier, which can be referenced in API endpoints */
      id: string
      owner: {
        /**
         * @description `user` or `service_account`
         * @enum {string}
         */
        type?: 'user' | 'service_account'
        user?: components['schemas']['ProjectUser']
        service_account?: components['schemas']['ProjectServiceAccount']
      }
    }
    ProjectApiKeyDeleteResponse: {
      /** @enum {string} */
      object: 'organization.project.api_key.deleted'
      id: string
      deleted: boolean
    }
    ProjectApiKeyListResponse: {
      /** @enum {string} */
      object: 'list'
      data: components['schemas']['ProjectApiKey'][]
      first_id: string
      last_id: string
      has_more: boolean
    }
    ProjectCreateRequest: {
      /** @description The friendly name of the project, this name appears in reports. */
      name: string
    }
    ProjectListResponse: {
      /** @enum {string} */
      object: 'list'
      data: components['schemas']['Project'][]
      first_id: string
      last_id: string
      has_more: boolean
    }
    /** @description Represents a project rate limit config. */
    ProjectRateLimit: {
      /**
       * @description The object type, which is always `project.rate_limit`
       * @enum {string}
       */
      object: 'project.rate_limit'
      /** @description The identifier, which can be referenced in API endpoints. */
      id: string
      /** @description The model this rate limit applies to. */
      model: string
      /** @description The maximum requests per minute. */
      max_requests_per_1_minute: number
      /** @description The maximum tokens per minute. */
      max_tokens_per_1_minute: number
      /** @description The maximum images per minute. Only present for relevant models. */
      max_images_per_1_minute?: number
      /** @description The maximum audio megabytes per minute. Only present for relevant models. */
      max_audio_megabytes_per_1_minute?: number
      /** @description The maximum requests per day. Only present for relevant models. */
      max_requests_per_1_day?: number
      /** @description The maximum batch input tokens per day. Only present for relevant models. */
      batch_1_day_max_input_tokens?: number
    }
    ProjectRateLimitListResponse: {
      /** @enum {string} */
      object: 'list'
      data: components['schemas']['ProjectRateLimit'][]
      first_id: string
      last_id: string
      has_more: boolean
    }
    ProjectRateLimitUpdateRequest: {
      /** @description The maximum requests per minute. */
      max_requests_per_1_minute?: number
      /** @description The maximum tokens per minute. */
      max_tokens_per_1_minute?: number
      /** @description The maximum images per minute. Only relevant for certain models. */
      max_images_per_1_minute?: number
      /** @description The maximum audio megabytes per minute. Only relevant for certain models. */
      max_audio_megabytes_per_1_minute?: number
      /** @description The maximum requests per day. Only relevant for certain models. */
      max_requests_per_1_day?: number
      /** @description The maximum batch input tokens per day. Only relevant for certain models. */
      batch_1_day_max_input_tokens?: number
    }
    /** @description Represents an individual service account in a project. */
    ProjectServiceAccount: {
      /**
       * @description The object type, which is always `organization.project.service_account`
       * @enum {string}
       */
      object: 'organization.project.service_account'
      /** @description The identifier, which can be referenced in API endpoints */
      id: string
      /** @description The name of the service account */
      name: string
      /**
       * @description `owner` or `member`
       * @enum {string}
       */
      role: 'owner' | 'member'
      /** @description The Unix timestamp (in seconds) of when the service account was created */
      created_at: number
    }
    ProjectServiceAccountApiKey: {
      /**
       * @description The object type, which is always `organization.project.service_account.api_key`
       * @enum {string}
       */
      object: 'organization.project.service_account.api_key'
      value: string
      name: string
      created_at: number
      id: string
    }
    ProjectServiceAccountCreateRequest: {
      /** @description The name of the service account being created. */
      name: string
    }
    ProjectServiceAccountCreateResponse: {
      /** @enum {string} */
      object: 'organization.project.service_account'
      id: string
      name: string
      /**
       * @description Service accounts can only have one role of type `member`
       * @enum {string}
       */
      role: 'member'
      created_at: number
      api_key: components['schemas']['ProjectServiceAccountApiKey']
    }
    ProjectServiceAccountDeleteResponse: {
      /** @enum {string} */
      object: 'organization.project.service_account.deleted'
      id: string
      deleted: boolean
    }
    ProjectServiceAccountListResponse: {
      /** @enum {string} */
      object: 'list'
      data: components['schemas']['ProjectServiceAccount'][]
      first_id: string
      last_id: string
      has_more: boolean
    }
    ProjectUpdateRequest: {
      /** @description The updated name of the project, this name appears in reports. */
      name: string
    }
    /** @description Represents an individual user in a project. */
    ProjectUser: {
      /**
       * @description The object type, which is always `organization.project.user`
       * @enum {string}
       */
      object: 'organization.project.user'
      /** @description The identifier, which can be referenced in API endpoints */
      id: string
      /** @description The name of the user */
      name: string
      /** @description The email address of the user */
      email: string
      /**
       * @description `owner` or `member`
       * @enum {string}
       */
      role: 'owner' | 'member'
      /** @description The Unix timestamp (in seconds) of when the project was added. */
      added_at: number
    }
    ProjectUserCreateRequest: {
      /** @description The ID of the user. */
      user_id: string
      /**
       * @description `owner` or `member`
       * @enum {string}
       */
      role: 'owner' | 'member'
    }
    ProjectUserDeleteResponse: {
      /** @enum {string} */
      object: 'organization.project.user.deleted'
      id: string
      deleted: boolean
    }
    ProjectUserListResponse: {
      object: string
      data: components['schemas']['ProjectUser'][]
      first_id: string
      last_id: string
      has_more: boolean
    }
    ProjectUserUpdateRequest: {
      /**
       * @description `owner` or `member`
       * @enum {string}
       */
      role: 'owner' | 'member'
    }
    /** @description A realtime client event.
     *      */
    RealtimeClientEvent:
      | components['schemas']['RealtimeClientEventConversationItemCreate']
      | components['schemas']['RealtimeClientEventConversationItemDelete']
      | components['schemas']['RealtimeClientEventConversationItemRetrieve']
      | components['schemas']['RealtimeClientEventConversationItemTruncate']
      | components['schemas']['RealtimeClientEventInputAudioBufferAppend']
      | components['schemas']['RealtimeClientEventInputAudioBufferClear']
      | components['schemas']['RealtimeClientEventInputAudioBufferCommit']
      | components['schemas']['RealtimeClientEventResponseCancel']
      | components['schemas']['RealtimeClientEventResponseCreate']
      | components['schemas']['RealtimeClientEventSessionUpdate']
      | components['schemas']['RealtimeClientEventTranscriptionSessionUpdate']
    /** @description Add a new Item to the Conversation's context, including messages, function
     *     calls, and function call responses. This event can be used both to populate a
     *     "history" of the conversation and to add new items mid-stream, but has the
     *     current limitation that it cannot populate assistant audio messages.
     *
     *     If successful, the server will respond with a `conversation.item.created`
     *     event, otherwise an `error` event will be sent.
     *      */
    RealtimeClientEventConversationItemCreate: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `conversation.item.create`.
       * @enum {string}
       */
      type: 'conversation.item.create'
      /** @description The ID of the preceding item after which the new item will be inserted.
       *     If not set, the new item will be appended to the end of the conversation.
       *     If set to `root`, the new item will be added to the beginning of the conversation.
       *     If set to an existing ID, it allows an item to be inserted mid-conversation. If the
       *     ID cannot be found, an error will be returned and the item will not be added.
       *      */
      previous_item_id?: string
      item: components['schemas']['RealtimeConversationItem']
    }
    /** @description Send this event when you want to remove any item from the conversation
     *     history. The server will respond with a `conversation.item.deleted` event,
     *     unless the item does not exist in the conversation history, in which case the
     *     server will respond with an error.
     *      */
    RealtimeClientEventConversationItemDelete: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `conversation.item.delete`.
       * @enum {string}
       */
      type: 'conversation.item.delete'
      /** @description The ID of the item to delete. */
      item_id: string
    }
    /** @description Send this event when you want to retrieve the server's representation of a specific item in the conversation history. This is useful, for example, to inspect user audio after noise cancellation and VAD.
     *     The server will respond with a `conversation.item.retrieved` event,
     *     unless the item does not exist in the conversation history, in which case the
     *     server will respond with an error.
     *      */
    RealtimeClientEventConversationItemRetrieve: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `conversation.item.retrieve`.
       * @enum {string}
       */
      type: 'conversation.item.retrieve'
      /** @description The ID of the item to retrieve. */
      item_id: string
    }
    /** @description Send this event to truncate a previous assistant message’s audio. The server
     *     will produce audio faster than realtime, so this event is useful when the user
     *     interrupts to truncate audio that has already been sent to the client but not
     *     yet played. This will synchronize the server's understanding of the audio with
     *     the client's playback.
     *
     *     Truncating audio will delete the server-side text transcript to ensure there
     *     is not text in the context that hasn't been heard by the user.
     *
     *     If successful, the server will respond with a `conversation.item.truncated`
     *     event.
     *      */
    RealtimeClientEventConversationItemTruncate: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `conversation.item.truncate`.
       * @enum {string}
       */
      type: 'conversation.item.truncate'
      /** @description The ID of the assistant message item to truncate. Only assistant message
       *     items can be truncated.
       *      */
      item_id: string
      /** @description The index of the content part to truncate. Set this to 0. */
      content_index: number
      /** @description Inclusive duration up to which audio is truncated, in milliseconds. If
       *     the audio_end_ms is greater than the actual audio duration, the server
       *     will respond with an error.
       *      */
      audio_end_ms: number
    }
    /** @description Send this event to append audio bytes to the input audio buffer. The audio
     *     buffer is temporary storage you can write to and later commit. In Server VAD
     *     mode, the audio buffer is used to detect speech and the server will decide
     *     when to commit. When Server VAD is disabled, you must commit the audio buffer
     *     manually.
     *
     *     The client may choose how much audio to place in each event up to a maximum
     *     of 15 MiB, for example streaming smaller chunks from the client may allow the
     *     VAD to be more responsive. Unlike made other client events, the server will
     *     not send a confirmation response to this event.
     *      */
    RealtimeClientEventInputAudioBufferAppend: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `input_audio_buffer.append`.
       * @enum {string}
       */
      type: 'input_audio_buffer.append'
      /** @description Base64-encoded audio bytes. This must be in the format specified by the
       *     `input_audio_format` field in the session configuration.
       *      */
      audio: string
    }
    /** @description Send this event to clear the audio bytes in the buffer. The server will
     *     respond with an `input_audio_buffer.cleared` event.
     *      */
    RealtimeClientEventInputAudioBufferClear: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `input_audio_buffer.clear`.
       * @enum {string}
       */
      type: 'input_audio_buffer.clear'
    }
    /** @description Send this event to commit the user input audio buffer, which will create a
     *     new user message item in the conversation. This event will produce an error
     *     if the input audio buffer is empty. When in Server VAD mode, the client does
     *     not need to send this event, the server will commit the audio buffer
     *     automatically.
     *
     *     Committing the input audio buffer will trigger input audio transcription
     *     (if enabled in session configuration), but it will not create a response
     *     from the model. The server will respond with an `input_audio_buffer.committed`
     *     event.
     *      */
    RealtimeClientEventInputAudioBufferCommit: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `input_audio_buffer.commit`.
       * @enum {string}
       */
      type: 'input_audio_buffer.commit'
    }
    /** @description Send this event to cancel an in-progress response. The server will respond
     *     with a `response.cancelled` event or an error if there is no response to
     *     cancel.
     *      */
    RealtimeClientEventResponseCancel: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `response.cancel`.
       * @enum {string}
       */
      type: 'response.cancel'
      /** @description A specific response ID to cancel - if not provided, will cancel an
       *     in-progress response in the default conversation.
       *      */
      response_id?: string
    }
    /** @description This event instructs the server to create a Response, which means triggering
     *     model inference. When in Server VAD mode, the server will create Responses
     *     automatically.
     *
     *     A Response will include at least one Item, and may have two, in which case
     *     the second will be a function call. These Items will be appended to the
     *     conversation history.
     *
     *     The server will respond with a `response.created` event, events for Items
     *     and content created, and finally a `response.done` event to indicate the
     *     Response is complete.
     *
     *     The `response.create` event includes inference configuration like
     *     `instructions`, and `temperature`. These fields will override the Session's
     *     configuration for this Response only.
     *      */
    RealtimeClientEventResponseCreate: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `response.create`.
       * @enum {string}
       */
      type: 'response.create'
      response?: components['schemas']['RealtimeResponseCreateParams']
    }
    /** @description Send this event to update the session’s default configuration.
     *     The client may send this event at any time to update any field,
     *     except for `voice`. However, note that once a session has been
     *     initialized with a particular `model`, it can’t be changed to
     *     another model using `session.update`.
     *
     *     When the server receives a `session.update`, it will respond
     *     with a `session.updated` event showing the full, effective configuration.
     *     Only the fields that are present are updated. To clear a field like
     *     `instructions`, pass an empty string.
     *      */
    RealtimeClientEventSessionUpdate: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `session.update`.
       * @enum {string}
       */
      type: 'session.update'
      session: components['schemas']['RealtimeSessionCreateRequest']
    }
    /** @description Send this event to update a transcription session.
     *      */
    RealtimeClientEventTranscriptionSessionUpdate: {
      /** @description Optional client-generated ID used to identify this event. */
      event_id?: string
      /**
       * @description The event type, must be `transcription_session.update`.
       * @enum {string}
       */
      type: 'transcription_session.update'
      session: components['schemas']['RealtimeTranscriptionSessionCreateRequest']
    }
    /** @description The item to add to the conversation. */
    RealtimeConversationItem: {
      /** @description The unique ID of the item, this can be generated by the client to help
       *     manage server-side context, but is not required because the server will
       *     generate one if not provided.
       *      */
      id?: string
      /**
       * @description The type of the item (`message`, `function_call`, `function_call_output`).
       *
       * @enum {string}
       */
      type?: 'message' | 'function_call' | 'function_call_output'
      /**
       * @description Identifier for the API object being returned - always `realtime.item`.
       *
       * @enum {string}
       */
      object?: 'realtime.item'
      /**
       * @description The status of the item (`completed`, `incomplete`). These have no effect
       *     on the conversation, but are accepted for consistency with the
       *     `conversation.item.created` event.
       *
       * @enum {string}
       */
      status?: 'completed' | 'incomplete'
      /**
       * @description The role of the message sender (`user`, `assistant`, `system`), only
       *     applicable for `message` items.
       *
       * @enum {string}
       */
      role?: 'user' | 'assistant' | 'system'
      /** @description The content of the message, applicable for `message` items.
       *     - Message items of role `system` support only `input_text` content
       *     - Message items of role `user` support `input_text` and `input_audio`
       *       content
       *     - Message items of role `assistant` support `text` content.
       *      */
      content?: {
        /**
         * @description The content type (`input_text`, `input_audio`, `item_reference`, `text`).
         *
         * @enum {string}
         */
        type?: 'input_audio' | 'input_text' | 'item_reference' | 'text'
        /** @description The text content, used for `input_text` and `text` content types.
         *      */
        text?: string
        /** @description ID of a previous conversation item to reference (for `item_reference`
         *     content types in `response.create` events). These can reference both
         *     client and server created items.
         *      */
        id?: string
        /** @description Base64-encoded audio bytes, used for `input_audio` content type.
         *      */
        audio?: string
        /** @description The transcript of the audio, used for `input_audio` content type.
         *      */
        transcript?: string
      }[]
      /** @description The ID of the function call (for `function_call` and
       *     `function_call_output` items). If passed on a `function_call_output`
       *     item, the server will check that a `function_call` item with the same
       *     ID exists in the conversation history.
       *      */
      call_id?: string
      /** @description The name of the function being called (for `function_call` items).
       *      */
      name?: string
      /** @description The arguments of the function call (for `function_call` items).
       *      */
      arguments?: string
      /** @description The output of the function call (for `function_call_output` items).
       *      */
      output?: string
    }
    /** @description The item to add to the conversation. */
    RealtimeConversationItemWithReference: {
      /** @description For an item of type (`message` | `function_call` | `function_call_output`)
       *     this field allows the client to assign the unique ID of the item. It is
       *     not required because the server will generate one if not provided.
       *
       *     For an item of type `item_reference`, this field is required and is a
       *     reference to any item that has previously existed in the conversation.
       *      */
      id?: string
      /**
       * @description The type of the item (`message`, `function_call`, `function_call_output`, `item_reference`).
       *
       * @enum {string}
       */
      type?: 'message' | 'function_call' | 'function_call_output'
      /**
       * @description Identifier for the API object being returned - always `realtime.item`.
       *
       * @enum {string}
       */
      object?: 'realtime.item'
      /**
       * @description The status of the item (`completed`, `incomplete`). These have no effect
       *     on the conversation, but are accepted for consistency with the
       *     `conversation.item.created` event.
       *
       * @enum {string}
       */
      status?: 'completed' | 'incomplete'
      /**
       * @description The role of the message sender (`user`, `assistant`, `system`), only
       *     applicable for `message` items.
       *
       * @enum {string}
       */
      role?: 'user' | 'assistant' | 'system'
      /** @description The content of the message, applicable for `message` items.
       *     - Message items of role `system` support only `input_text` content
       *     - Message items of role `user` support `input_text` and `input_audio`
       *       content
       *     - Message items of role `assistant` support `text` content.
       *      */
      content?: {
        /**
         * @description The content type (`input_text`, `input_audio`, `item_reference`, `text`).
         *
         * @enum {string}
         */
        type?: 'input_audio' | 'input_text' | 'item_reference' | 'text'
        /** @description The text content, used for `input_text` and `text` content types.
         *      */
        text?: string
        /** @description ID of a previous conversation item to reference (for `item_reference`
         *     content types in `response.create` events). These can reference both
         *     client and server created items.
         *      */
        id?: string
        /** @description Base64-encoded audio bytes, used for `input_audio` content type.
         *      */
        audio?: string
        /** @description The transcript of the audio, used for `input_audio` content type.
         *      */
        transcript?: string
      }[]
      /** @description The ID of the function call (for `function_call` and
       *     `function_call_output` items). If passed on a `function_call_output`
       *     item, the server will check that a `function_call` item with the same
       *     ID exists in the conversation history.
       *      */
      call_id?: string
      /** @description The name of the function being called (for `function_call` items).
       *      */
      name?: string
      /** @description The arguments of the function call (for `function_call` items).
       *      */
      arguments?: string
      /** @description The output of the function call (for `function_call_output` items).
       *      */
      output?: string
    }
    /** @description The response resource. */
    RealtimeResponse: {
      /** @description The unique ID of the response. */
      id?: string
      /**
       * @description The object type, must be `realtime.response`.
       * @enum {string}
       */
      object?: 'realtime.response'
      /**
       * @description The final status of the response (`completed`, `cancelled`, `failed`, or
       *     `incomplete`).
       *
       * @enum {string}
       */
      status?: 'completed' | 'cancelled' | 'failed' | 'incomplete'
      /** @description Additional details about the status. */
      status_details?: {
        /**
         * @description The type of error that caused the response to fail, corresponding
         *     with the `status` field (`completed`, `cancelled`, `incomplete`,
         *     `failed`).
         *
         * @enum {string}
         */
        type?: 'completed' | 'cancelled' | 'failed' | 'incomplete'
        /**
         * @description The reason the Response did not complete. For a `cancelled` Response,
         *     one of `turn_detected` (the server VAD detected a new start of speech)
         *     or `client_cancelled` (the client sent a cancel event). For an
         *     `incomplete` Response, one of `max_output_tokens` or `content_filter`
         *     (the server-side safety filter activated and cut off the response).
         *
         * @enum {string}
         */
        reason?:
          | 'turn_detected'
          | 'client_cancelled'
          | 'max_output_tokens'
          | 'content_filter'
        /** @description A description of the error that caused the response to fail,
         *     populated when the `status` is `failed`.
         *      */
        error?: {
          /** @description The type of error. */
          type?: string
          /** @description Error code, if any. */
          code?: string
        }
      }
      /** @description The list of output items generated by the response. */
      output?: components['schemas']['RealtimeConversationItem'][]
      metadata?: components['schemas']['Metadata']
      /** @description Usage statistics for the Response, this will correspond to billing. A
       *     Realtime API session will maintain a conversation context and append new
       *     Items to the Conversation, thus output from previous turns (text and
       *     audio tokens) will become the input for later turns.
       *      */
      usage?: {
        /** @description The total number of tokens in the Response including input and output
         *     text and audio tokens.
         *      */
        total_tokens?: number
        /** @description The number of input tokens used in the Response, including text and
         *     audio tokens.
         *      */
        input_tokens?: number
        /** @description The number of output tokens sent in the Response, including text and
         *     audio tokens.
         *      */
        output_tokens?: number
        /** @description Details about the input tokens used in the Response. */
        input_token_details?: {
          /** @description The number of cached tokens used in the Response. */
          cached_tokens?: number
          /** @description The number of text tokens used in the Response. */
          text_tokens?: number
          /** @description The number of audio tokens used in the Response. */
          audio_tokens?: number
        }
        /** @description Details about the output tokens used in the Response. */
        output_token_details?: {
          /** @description The number of text tokens used in the Response. */
          text_tokens?: number
          /** @description The number of audio tokens used in the Response. */
          audio_tokens?: number
        }
      }
      /** @description Which conversation the response is added to, determined by the `conversation`
       *     field in the `response.create` event. If `auto`, the response will be added to
       *     the default conversation and the value of `conversation_id` will be an id like
       *     `conv_1234`. If `none`, the response will not be added to any conversation and
       *     the value of `conversation_id` will be `null`. If responses are being triggered
       *     by server VAD, the response will be added to the default conversation, thus
       *     the `conversation_id` will be an id like `conv_1234`.
       *      */
      conversation_id?: string
      /** @description The voice the model used to respond.
       *     Current voice options are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`,
       *     `onyx`, `nova`, `sage`, `shimmer`, and `verse`.
       *      */
      voice?: components['schemas']['VoiceIdsShared']
      /** @description The set of modalities the model used to respond. If there are multiple modalities,
       *     the model will pick one, for example if `modalities` is `["text", "audio"]`, the model
       *     could be responding in either text or audio.
       *      */
      modalities?: ('text' | 'audio')[]
      /**
       * @description The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *
       * @enum {string}
       */
      output_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw'
      /** @description Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
       *      */
      temperature?: number
      /** @description Maximum number of output tokens for a single assistant response,
       *     inclusive of tool calls, that was used in this response.
       *      */
      max_output_tokens?: number | 'inf'
    }
    /** @description Create a new Realtime response with these parameters */
    RealtimeResponseCreateParams: {
      /** @description The set of modalities the model can respond with. To disable audio,
       *     set this to ["text"].
       *      */
      modalities?: ('text' | 'audio')[]
      /** @description The default system instructions (i.e. system message) prepended to model
       *     calls. This field allows the client to guide the model on desired
       *     responses. The model can be instructed on response content and format,
       *     (e.g. "be extremely succinct", "act friendly", "here are examples of good
       *     responses") and on audio behavior (e.g. "talk quickly", "inject emotion
       *     into your voice", "laugh frequently"). The instructions are not guaranteed
       *     to be followed by the model, but they provide guidance to the model on the
       *     desired behavior.
       *
       *     Note that the server sets default instructions which will be used if this
       *     field is not set and are visible in the `session.created` event at the
       *     start of the session.
       *      */
      instructions?: string
      /** @description The voice the model uses to respond. Voice cannot be changed during the
       *     session once the model has responded with audio at least once. Current
       *     voice options are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`,
       *     `onyx`, `nova`, `sage`, `shimmer`, and `verse`.
       *      */
      voice?: components['schemas']['VoiceIdsShared']
      /**
       * @description The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *
       * @enum {string}
       */
      output_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw'
      /** @description Tools (functions) available to the model. */
      tools?: {
        /**
         * @description The type of the tool, i.e. `function`.
         * @enum {string}
         */
        type?: 'function'
        /** @description The name of the function. */
        name?: string
        /** @description The description of the function, including guidance on when and how
         *     to call it, and guidance about what to tell the user when calling
         *     (if anything).
         *      */
        description?: string
        /** @description Parameters of the function in JSON Schema. */
        parameters?: Record<string, never>
      }[]
      /** @description How the model chooses tools. Options are `auto`, `none`, `required`, or
       *     specify a function, like `{"type": "function", "function": {"name": "my_function"}}`.
       *      */
      tool_choice?: string
      /** @description Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
       *      */
      temperature?: number
      /** @description Maximum number of output tokens for a single assistant response,
       *     inclusive of tool calls. Provide an integer between 1 and 4096 to
       *     limit output tokens, or `inf` for the maximum available tokens for a
       *     given model. Defaults to `inf`.
       *      */
      max_response_output_tokens?: number | 'inf'
      /** @description Controls which conversation the response is added to. Currently supports
       *     `auto` and `none`, with `auto` as the default value. The `auto` value
       *     means that the contents of the response will be added to the default
       *     conversation. Set this to `none` to create an out-of-band response which
       *     will not add items to default conversation.
       *      */
      conversation?: string | ('auto' | 'none')
      metadata?: components['schemas']['Metadata']
      /** @description Input items to include in the prompt for the model. Using this field
       *     creates a new context for this Response instead of using the default
       *     conversation. An empty array `[]` will clear the context for this Response.
       *     Note that this can include references to items from the default conversation.
       *      */
      input?: components['schemas']['RealtimeConversationItemWithReference'][]
    }
    /** @description A realtime server event.
     *      */
    RealtimeServerEvent:
      | components['schemas']['RealtimeServerEventConversationCreated']
      | components['schemas']['RealtimeServerEventConversationItemCreated']
      | components['schemas']['RealtimeServerEventConversationItemDeleted']
      | components['schemas']['RealtimeServerEventConversationItemInputAudioTranscriptionCompleted']
      | components['schemas']['RealtimeServerEventConversationItemInputAudioTranscriptionDelta']
      | components['schemas']['RealtimeServerEventConversationItemInputAudioTranscriptionFailed']
      | components['schemas']['RealtimeServerEventConversationItemRetrieved']
      | components['schemas']['RealtimeServerEventConversationItemTruncated']
      | components['schemas']['RealtimeServerEventError']
      | components['schemas']['RealtimeServerEventInputAudioBufferCleared']
      | components['schemas']['RealtimeServerEventInputAudioBufferCommitted']
      | components['schemas']['RealtimeServerEventInputAudioBufferSpeechStarted']
      | components['schemas']['RealtimeServerEventInputAudioBufferSpeechStopped']
      | components['schemas']['RealtimeServerEventRateLimitsUpdated']
      | components['schemas']['RealtimeServerEventResponseAudioDelta']
      | components['schemas']['RealtimeServerEventResponseAudioDone']
      | components['schemas']['RealtimeServerEventResponseAudioTranscriptDelta']
      | components['schemas']['RealtimeServerEventResponseAudioTranscriptDone']
      | components['schemas']['RealtimeServerEventResponseContentPartAdded']
      | components['schemas']['RealtimeServerEventResponseContentPartDone']
      | components['schemas']['RealtimeServerEventResponseCreated']
      | components['schemas']['RealtimeServerEventResponseDone']
      | components['schemas']['RealtimeServerEventResponseFunctionCallArgumentsDelta']
      | components['schemas']['RealtimeServerEventResponseFunctionCallArgumentsDone']
      | components['schemas']['RealtimeServerEventResponseOutputItemAdded']
      | components['schemas']['RealtimeServerEventResponseOutputItemDone']
      | components['schemas']['RealtimeServerEventResponseTextDelta']
      | components['schemas']['RealtimeServerEventResponseTextDone']
      | components['schemas']['RealtimeServerEventSessionCreated']
      | components['schemas']['RealtimeServerEventSessionUpdated']
      | components['schemas']['RealtimeServerEventTranscriptionSessionUpdated']
    /** @description Returned when a conversation is created. Emitted right after session creation.
     *      */
    RealtimeServerEventConversationCreated: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `conversation.created`.
       * @enum {string}
       */
      type: 'conversation.created'
      /** @description The conversation resource. */
      conversation: {
        /** @description The unique ID of the conversation. */
        id?: string
        /** @description The object type, must be `realtime.conversation`. */
        object?: string
      }
    }
    /** @description Returned when a conversation item is created. There are several scenarios that produce this event:
     *       - The server is generating a Response, which if successful will produce
     *         either one or two Items, which will be of type `message`
     *         (role `assistant`) or type `function_call`.
     *       - The input audio buffer has been committed, either by the client or the
     *         server (in `server_vad` mode). The server will take the content of the
     *         input audio buffer and add it to a new user message Item.
     *       - The client has sent a `conversation.item.create` event to add a new Item
     *         to the Conversation.
     *      */
    RealtimeServerEventConversationItemCreated: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `conversation.item.created`.
       * @enum {string}
       */
      type: 'conversation.item.created'
      /** @description The ID of the preceding item in the Conversation context, allows the
       *     client to understand the order of the conversation.
       *      */
      previous_item_id: string
      item: components['schemas']['RealtimeConversationItem']
    }
    /** @description Returned when an item in the conversation is deleted by the client with a
     *     `conversation.item.delete` event. This event is used to synchronize the
     *     server's understanding of the conversation history with the client's view.
     *      */
    RealtimeServerEventConversationItemDeleted: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `conversation.item.deleted`.
       * @enum {string}
       */
      type: 'conversation.item.deleted'
      /** @description The ID of the item that was deleted. */
      item_id: string
    }
    /** @description This event is the output of audio transcription for user audio written to the
     *     user audio buffer. Transcription begins when the input audio buffer is
     *     committed by the client or server (in `server_vad` mode). Transcription runs
     *     asynchronously with Response creation, so this event may come before or after
     *     the Response events.
     *
     *     Realtime API models accept audio natively, and thus input transcription is a
     *     separate process run on a separate ASR (Automatic Speech Recognition) model,
     *     currently always `whisper-1`. Thus the transcript may diverge somewhat from
     *     the model's interpretation, and should be treated as a rough guide.
     *      */
    RealtimeServerEventConversationItemInputAudioTranscriptionCompleted: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be
       *     `conversation.item.input_audio_transcription.completed`.
       *
       * @enum {string}
       */
      type: 'conversation.item.input_audio_transcription.completed'
      /** @description The ID of the user message item containing the audio. */
      item_id: string
      /** @description The index of the content part containing the audio. */
      content_index: number
      /** @description The transcribed text. */
      transcript: string
      /** @description The log probabilities of the transcription. */
      logprobs?: components['schemas']['LogProbProperties'][] | null
    }
    /** @description Returned when the text value of an input audio transcription content part is updated.
     *      */
    RealtimeServerEventConversationItemInputAudioTranscriptionDelta: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `conversation.item.input_audio_transcription.delta`.
       * @enum {string}
       */
      type: 'conversation.item.input_audio_transcription.delta'
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the content part in the item's content array. */
      content_index?: number
      /** @description The text delta. */
      delta?: string
      /** @description The log probabilities of the transcription. */
      logprobs?: components['schemas']['LogProbProperties'][] | null
    }
    /** @description Returned when input audio transcription is configured, and a transcription
     *     request for a user message failed. These events are separate from other
     *     `error` events so that the client can identify the related Item.
     *      */
    RealtimeServerEventConversationItemInputAudioTranscriptionFailed: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be
       *     `conversation.item.input_audio_transcription.failed`.
       *
       * @enum {string}
       */
      type: 'conversation.item.input_audio_transcription.failed'
      /** @description The ID of the user message item. */
      item_id: string
      /** @description The index of the content part containing the audio. */
      content_index: number
      /** @description Details of the transcription error. */
      error: {
        /** @description The type of error. */
        type?: string
        /** @description Error code, if any. */
        code?: string
        /** @description A human-readable error message. */
        message?: string
        /** @description Parameter related to the error, if any. */
        param?: string
      }
    }
    /** @description Returned when a conversation item is retrieved with `conversation.item.retrieve`.
     *      */
    RealtimeServerEventConversationItemRetrieved: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `conversation.item.retrieved`.
       * @enum {string}
       */
      type: 'conversation.item.retrieved'
      item: components['schemas']['RealtimeConversationItem']
    }
    /** @description Returned when an earlier assistant audio message item is truncated by the
     *     client with a `conversation.item.truncate` event. This event is used to
     *     synchronize the server's understanding of the audio with the client's playback.
     *
     *     This action will truncate the audio and remove the server-side text transcript
     *     to ensure there is no text in the context that hasn't been heard by the user.
     *      */
    RealtimeServerEventConversationItemTruncated: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `conversation.item.truncated`.
       * @enum {string}
       */
      type: 'conversation.item.truncated'
      /** @description The ID of the assistant message item that was truncated. */
      item_id: string
      /** @description The index of the content part that was truncated. */
      content_index: number
      /** @description The duration up to which the audio was truncated, in milliseconds.
       *      */
      audio_end_ms: number
    }
    /** @description Returned when an error occurs, which could be a client problem or a server
     *     problem. Most errors are recoverable and the session will stay open, we
     *     recommend to implementors to monitor and log error messages by default.
     *      */
    RealtimeServerEventError: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `error`.
       * @enum {string}
       */
      type: 'error'
      /** @description Details of the error. */
      error: {
        /** @description The type of error (e.g., "invalid_request_error", "server_error").
         *      */
        type: string
        /** @description Error code, if any. */
        code?: string | null
        /** @description A human-readable error message. */
        message: string
        /** @description Parameter related to the error, if any. */
        param?: string | null
        /** @description The event_id of the client event that caused the error, if applicable.
         *      */
        event_id?: string | null
      }
    }
    /** @description Returned when the input audio buffer is cleared by the client with a
     *     `input_audio_buffer.clear` event.
     *      */
    RealtimeServerEventInputAudioBufferCleared: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `input_audio_buffer.cleared`.
       * @enum {string}
       */
      type: 'input_audio_buffer.cleared'
    }
    /** @description Returned when an input audio buffer is committed, either by the client or
     *     automatically in server VAD mode. The `item_id` property is the ID of the user
     *     message item that will be created, thus a `conversation.item.created` event
     *     will also be sent to the client.
     *      */
    RealtimeServerEventInputAudioBufferCommitted: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `input_audio_buffer.committed`.
       * @enum {string}
       */
      type: 'input_audio_buffer.committed'
      /** @description The ID of the preceding item after which the new item will be inserted.
       *      */
      previous_item_id: string
      /** @description The ID of the user message item that will be created. */
      item_id: string
    }
    /** @description Sent by the server when in `server_vad` mode to indicate that speech has been
     *     detected in the audio buffer. This can happen any time audio is added to the
     *     buffer (unless speech is already detected). The client may want to use this
     *     event to interrupt audio playback or provide visual feedback to the user.
     *
     *     The client should expect to receive a `input_audio_buffer.speech_stopped` event
     *     when speech stops. The `item_id` property is the ID of the user message item
     *     that will be created when speech stops and will also be included in the
     *     `input_audio_buffer.speech_stopped` event (unless the client manually commits
     *     the audio buffer during VAD activation).
     *      */
    RealtimeServerEventInputAudioBufferSpeechStarted: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `input_audio_buffer.speech_started`.
       * @enum {string}
       */
      type: 'input_audio_buffer.speech_started'
      /** @description Milliseconds from the start of all audio written to the buffer during the
       *     session when speech was first detected. This will correspond to the
       *     beginning of audio sent to the model, and thus includes the
       *     `prefix_padding_ms` configured in the Session.
       *      */
      audio_start_ms: number
      /** @description The ID of the user message item that will be created when speech stops.
       *      */
      item_id: string
    }
    /** @description Returned in `server_vad` mode when the server detects the end of speech in
     *     the audio buffer. The server will also send an `conversation.item.created`
     *     event with the user message item that is created from the audio buffer.
     *      */
    RealtimeServerEventInputAudioBufferSpeechStopped: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `input_audio_buffer.speech_stopped`.
       * @enum {string}
       */
      type: 'input_audio_buffer.speech_stopped'
      /** @description Milliseconds since the session started when speech stopped. This will
       *     correspond to the end of audio sent to the model, and thus includes the
       *     `min_silence_duration_ms` configured in the Session.
       *      */
      audio_end_ms: number
      /** @description The ID of the user message item that will be created. */
      item_id: string
    }
    /** @description Emitted at the beginning of a Response to indicate the updated rate limits.
     *     When a Response is created some tokens will be "reserved" for the output
     *     tokens, the rate limits shown here reflect that reservation, which is then
     *     adjusted accordingly once the Response is completed.
     *      */
    RealtimeServerEventRateLimitsUpdated: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `rate_limits.updated`.
       * @enum {string}
       */
      type: 'rate_limits.updated'
      /** @description List of rate limit information. */
      rate_limits: {
        /**
         * @description The name of the rate limit (`requests`, `tokens`).
         *
         * @enum {string}
         */
        name?: 'requests' | 'tokens'
        /** @description The maximum allowed value for the rate limit. */
        limit?: number
        /** @description The remaining value before the limit is reached. */
        remaining?: number
        /** @description Seconds until the rate limit resets. */
        reset_seconds?: number
      }[]
    }
    /** @description Returned when the model-generated audio is updated. */
    RealtimeServerEventResponseAudioDelta: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.audio.delta`.
       * @enum {string}
       */
      type: 'response.audio.delta'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The index of the content part in the item's content array. */
      content_index: number
      /** @description Base64-encoded audio data delta. */
      delta: string
    }
    /** @description Returned when the model-generated audio is done. Also emitted when a Response
     *     is interrupted, incomplete, or cancelled.
     *      */
    RealtimeServerEventResponseAudioDone: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.audio.done`.
       * @enum {string}
       */
      type: 'response.audio.done'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The index of the content part in the item's content array. */
      content_index: number
    }
    /** @description Returned when the model-generated transcription of audio output is updated.
     *      */
    RealtimeServerEventResponseAudioTranscriptDelta: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.audio_transcript.delta`.
       * @enum {string}
       */
      type: 'response.audio_transcript.delta'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The index of the content part in the item's content array. */
      content_index: number
      /** @description The transcript delta. */
      delta: string
    }
    /** @description Returned when the model-generated transcription of audio output is done
     *     streaming. Also emitted when a Response is interrupted, incomplete, or
     *     cancelled.
     *      */
    RealtimeServerEventResponseAudioTranscriptDone: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.audio_transcript.done`.
       * @enum {string}
       */
      type: 'response.audio_transcript.done'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The index of the content part in the item's content array. */
      content_index: number
      /** @description The final transcript of the audio. */
      transcript: string
    }
    /** @description Returned when a new content part is added to an assistant message item during
     *     response generation.
     *      */
    RealtimeServerEventResponseContentPartAdded: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.content_part.added`.
       * @enum {string}
       */
      type: 'response.content_part.added'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the item to which the content part was added. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The index of the content part in the item's content array. */
      content_index: number
      /** @description The content part that was added. */
      part: {
        /**
         * @description The content type ("text", "audio").
         * @enum {string}
         */
        type?: 'audio' | 'text'
        /** @description The text content (if type is "text"). */
        text?: string
        /** @description Base64-encoded audio data (if type is "audio"). */
        audio?: string
        /** @description The transcript of the audio (if type is "audio"). */
        transcript?: string
      }
    }
    /** @description Returned when a content part is done streaming in an assistant message item.
     *     Also emitted when a Response is interrupted, incomplete, or cancelled.
     *      */
    RealtimeServerEventResponseContentPartDone: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.content_part.done`.
       * @enum {string}
       */
      type: 'response.content_part.done'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The index of the content part in the item's content array. */
      content_index: number
      /** @description The content part that is done. */
      part: {
        /**
         * @description The content type ("text", "audio").
         * @enum {string}
         */
        type?: 'audio' | 'text'
        /** @description The text content (if type is "text"). */
        text?: string
        /** @description Base64-encoded audio data (if type is "audio"). */
        audio?: string
        /** @description The transcript of the audio (if type is "audio"). */
        transcript?: string
      }
    }
    /** @description Returned when a new Response is created. The first event of response creation,
     *     where the response is in an initial state of `in_progress`.
     *      */
    RealtimeServerEventResponseCreated: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.created`.
       * @enum {string}
       */
      type: 'response.created'
      response: components['schemas']['RealtimeResponse']
    }
    /** @description Returned when a Response is done streaming. Always emitted, no matter the
     *     final state. The Response object included in the `response.done` event will
     *     include all output Items in the Response but will omit the raw audio data.
     *      */
    RealtimeServerEventResponseDone: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.done`.
       * @enum {string}
       */
      type: 'response.done'
      response: components['schemas']['RealtimeResponse']
    }
    /** @description Returned when the model-generated function call arguments are updated.
     *      */
    RealtimeServerEventResponseFunctionCallArgumentsDelta: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.function_call_arguments.delta`.
       *
       * @enum {string}
       */
      type: 'response.function_call_arguments.delta'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the function call item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The ID of the function call. */
      call_id: string
      /** @description The arguments delta as a JSON string. */
      delta: string
    }
    /** @description Returned when the model-generated function call arguments are done streaming.
     *     Also emitted when a Response is interrupted, incomplete, or cancelled.
     *      */
    RealtimeServerEventResponseFunctionCallArgumentsDone: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.function_call_arguments.done`.
       *
       * @enum {string}
       */
      type: 'response.function_call_arguments.done'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the function call item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The ID of the function call. */
      call_id: string
      /** @description The final arguments as a JSON string. */
      arguments: string
    }
    /** @description Returned when a new Item is created during Response generation. */
    RealtimeServerEventResponseOutputItemAdded: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.output_item.added`.
       * @enum {string}
       */
      type: 'response.output_item.added'
      /** @description The ID of the Response to which the item belongs. */
      response_id: string
      /** @description The index of the output item in the Response. */
      output_index: number
      item: components['schemas']['RealtimeConversationItem']
    }
    /** @description Returned when an Item is done streaming. Also emitted when a Response is
     *     interrupted, incomplete, or cancelled.
     *      */
    RealtimeServerEventResponseOutputItemDone: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.output_item.done`.
       * @enum {string}
       */
      type: 'response.output_item.done'
      /** @description The ID of the Response to which the item belongs. */
      response_id: string
      /** @description The index of the output item in the Response. */
      output_index: number
      item: components['schemas']['RealtimeConversationItem']
    }
    /** @description Returned when the text value of a "text" content part is updated. */
    RealtimeServerEventResponseTextDelta: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.text.delta`.
       * @enum {string}
       */
      type: 'response.text.delta'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The index of the content part in the item's content array. */
      content_index: number
      /** @description The text delta. */
      delta: string
    }
    /** @description Returned when the text value of a "text" content part is done streaming. Also
     *     emitted when a Response is interrupted, incomplete, or cancelled.
     *      */
    RealtimeServerEventResponseTextDone: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `response.text.done`.
       * @enum {string}
       */
      type: 'response.text.done'
      /** @description The ID of the response. */
      response_id: string
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the output item in the response. */
      output_index: number
      /** @description The index of the content part in the item's content array. */
      content_index: number
      /** @description The final text content. */
      text: string
    }
    /** @description Returned when a Session is created. Emitted automatically when a new
     *     connection is established as the first server event. This event will contain
     *     the default Session configuration.
     *      */
    RealtimeServerEventSessionCreated: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `session.created`.
       * @enum {string}
       */
      type: 'session.created'
      session: components['schemas']['RealtimeSession']
    }
    /** @description Returned when a session is updated with a `session.update` event, unless
     *     there is an error.
     *      */
    RealtimeServerEventSessionUpdated: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `session.updated`.
       * @enum {string}
       */
      type: 'session.updated'
      session: components['schemas']['RealtimeSession']
    }
    /** @description Returned when a transcription session is updated with a `transcription_session.update` event, unless
     *     there is an error.
     *      */
    RealtimeServerEventTranscriptionSessionUpdated: {
      /** @description The unique ID of the server event. */
      event_id: string
      /**
       * @description The event type, must be `transcription_session.updated`.
       * @enum {string}
       */
      type: 'transcription_session.updated'
      session: components['schemas']['RealtimeTranscriptionSessionCreateResponse']
    }
    /** @description Realtime session object configuration. */
    RealtimeSession: {
      /** @description Unique identifier for the session that looks like `sess_1234567890abcdef`.
       *      */
      id?: string
      /** @description The set of modalities the model can respond with. To disable audio,
       *     set this to ["text"].
       *      */
      modalities?: unknown
      /**
       * @description The Realtime model used for this session.
       *
       * @enum {string}
       */
      model?:
        | 'gpt-4o-realtime-preview'
        | 'gpt-4o-realtime-preview-2024-10-01'
        | 'gpt-4o-realtime-preview-2024-12-17'
        | 'gpt-4o-mini-realtime-preview'
        | 'gpt-4o-mini-realtime-preview-2024-12-17'
      /** @description The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the desired behavior.
       *
       *     Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.
       *      */
      instructions?: string
      /** @description The voice the model uses to respond. Voice cannot be changed during the
       *     session once the model has responded with audio at least once. Current
       *     voice options are `alloy`, `ash`, `ballad`, `coral`, `echo` `sage`,
       *     `shimmer` and `verse`.
       *      */
      voice?: components['schemas']['VoiceIdsShared']
      /**
       * @description The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *     For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,
       *     single channel (mono), and little-endian byte order.
       *
       * @default pcm16
       * @enum {string}
       */
      input_audio_format: 'pcm16' | 'g711_ulaw' | 'g711_alaw'
      /**
       * @description The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *     For `pcm16`, output audio is sampled at a rate of 24kHz.
       *
       * @default pcm16
       * @enum {string}
       */
      output_audio_format: 'pcm16' | 'g711_ulaw' | 'g711_alaw'
      /** @description Configuration for input audio transcription, defaults to off and can be  set to `null` to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs  asynchronously through [the /audio/transcriptions endpoint](https://platform.openai.com/docs/api-reference/audio/createTranscription) and should be treated as guidance of input audio content rather than precisely what the model heard. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.
       *      */
      input_audio_transcription?: {
        /** @description The model to use for transcription, current options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1`.
         *      */
        model?: string
        /** @description The language of the input audio. Supplying the input language in
         *     [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format
         *     will improve accuracy and latency.
         *      */
        language?: string
        /** @description An optional text to guide the model's style or continue a previous audio
         *     segment.
         *     For `whisper-1`, the [prompt is a list of keywords](/docs/guides/speech-to-text#prompting).
         *     For `gpt-4o-transcribe` models, the prompt is a free text string, for example "expect words related to technology".
         *      */
        prompt?: string
      }
      /** @description Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response.
       *     Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.
       *     Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.
       *      */
      turn_detection?: {
        /**
         * @description Type of turn detection.
         *
         * @default server_vad
         * @enum {string}
         */
        type: 'server_vad' | 'semantic_vad'
        /**
         * @description Used only for `semantic_vad` mode. The eagerness of the model to respond. `low` will wait longer for the user to continue speaking, `high` will respond more quickly. `auto` is the default and is equivalent to `medium`.
         *
         * @default auto
         * @enum {string}
         */
        eagerness: 'low' | 'medium' | 'high' | 'auto'
        /** @description Used only for `server_vad` mode. Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
         *     higher threshold will require louder audio to activate the model, and
         *     thus might perform better in noisy environments.
         *      */
        threshold?: number
        /** @description Used only for `server_vad` mode. Amount of audio to include before the VAD detected speech (in
         *     milliseconds). Defaults to 300ms.
         *      */
        prefix_padding_ms?: number
        /** @description Used only for `server_vad` mode. Duration of silence to detect speech stop (in milliseconds). Defaults
         *     to 500ms. With shorter values the model will respond more quickly,
         *     but may jump in on short pauses from the user.
         *      */
        silence_duration_ms?: number
        /**
         * @description Whether or not to automatically generate a response when a VAD stop event occurs.
         *
         * @default true
         */
        create_response: boolean
        /**
         * @description Whether or not to automatically interrupt any ongoing response with output to the default
         *     conversation (i.e. `conversation` of `auto`) when a VAD start event occurs.
         *
         * @default true
         */
        interrupt_response: boolean
      }
      /**
       * @description Configuration for input audio noise reduction. This can be set to `null` to turn off.
       *     Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model.
       *     Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.
       *
       * @default null
       */
      input_audio_noise_reduction: {
        /**
         * @description Type of noise reduction. `near_field` is for close-talking microphones such as headphones, `far_field` is for far-field microphones such as laptop or conference room microphones.
         *
         * @enum {string}
         */
        type?: 'near_field' | 'far_field'
      }
      /** @description Tools (functions) available to the model. */
      tools?: {
        /**
         * @description The type of the tool, i.e. `function`.
         * @enum {string}
         */
        type?: 'function'
        /** @description The name of the function. */
        name?: string
        /** @description The description of the function, including guidance on when and how
         *     to call it, and guidance about what to tell the user when calling
         *     (if anything).
         *      */
        description?: string
        /** @description Parameters of the function in JSON Schema. */
        parameters?: Record<string, never>
      }[]
      /**
       * @description How the model chooses tools. Options are `auto`, `none`, `required`, or
       *     specify a function.
       *
       * @default auto
       */
      tool_choice: string
      /**
       * @description Sampling temperature for the model, limited to [0.6, 1.2]. For audio models a temperature of 0.8 is highly recommended for best performance.
       *
       * @default 0.8
       */
      temperature: number
      /** @description Maximum number of output tokens for a single assistant response,
       *     inclusive of tool calls. Provide an integer between 1 and 4096 to
       *     limit output tokens, or `inf` for the maximum available tokens for a
       *     given model. Defaults to `inf`.
       *      */
      max_response_output_tokens?: number | 'inf'
    }
    /** @description Realtime session object configuration. */
    RealtimeSessionCreateRequest: {
      /** @description The set of modalities the model can respond with. To disable audio,
       *     set this to ["text"].
       *      */
      modalities?: unknown
      /**
       * @description The Realtime model used for this session.
       *
       * @enum {string}
       */
      model?:
        | 'gpt-4o-realtime-preview'
        | 'gpt-4o-realtime-preview-2024-10-01'
        | 'gpt-4o-realtime-preview-2024-12-17'
        | 'gpt-4o-mini-realtime-preview'
        | 'gpt-4o-mini-realtime-preview-2024-12-17'
      /** @description The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the desired behavior.
       *
       *     Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.
       *      */
      instructions?: string
      /** @description The voice the model uses to respond. Voice cannot be changed during the
       *     session once the model has responded with audio at least once. Current
       *     voice options are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`,
       *     `onyx`, `nova`, `sage`, `shimmer`, and `verse`.
       *      */
      voice?: components['schemas']['VoiceIdsShared']
      /**
       * @description The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *     For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,
       *     single channel (mono), and little-endian byte order.
       *
       * @default pcm16
       * @enum {string}
       */
      input_audio_format: 'pcm16' | 'g711_ulaw' | 'g711_alaw'
      /**
       * @description The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *     For `pcm16`, output audio is sampled at a rate of 24kHz.
       *
       * @default pcm16
       * @enum {string}
       */
      output_audio_format: 'pcm16' | 'g711_ulaw' | 'g711_alaw'
      /** @description Configuration for input audio transcription, defaults to off and can be  set to `null` to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs  asynchronously through [the /audio/transcriptions endpoint](https://platform.openai.com/docs/api-reference/audio/createTranscription) and should be treated as guidance of input audio content rather than precisely what the model heard. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.
       *      */
      input_audio_transcription?: {
        /** @description The model to use for transcription, current options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1`.
         *      */
        model?: string
        /** @description The language of the input audio. Supplying the input language in
         *     [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format
         *     will improve accuracy and latency.
         *      */
        language?: string
        /** @description An optional text to guide the model's style or continue a previous audio
         *     segment.
         *     For `whisper-1`, the [prompt is a list of keywords](/docs/guides/speech-to-text#prompting).
         *     For `gpt-4o-transcribe` models, the prompt is a free text string, for example "expect words related to technology".
         *      */
        prompt?: string
      }
      /** @description Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response.
       *     Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.
       *     Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.
       *      */
      turn_detection?: {
        /**
         * @description Type of turn detection.
         *
         * @default server_vad
         * @enum {string}
         */
        type: 'server_vad' | 'semantic_vad'
        /**
         * @description Used only for `semantic_vad` mode. The eagerness of the model to respond. `low` will wait longer for the user to continue speaking, `high` will respond more quickly. `auto` is the default and is equivalent to `medium`.
         *
         * @default auto
         * @enum {string}
         */
        eagerness: 'low' | 'medium' | 'high' | 'auto'
        /** @description Used only for `server_vad` mode. Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
         *     higher threshold will require louder audio to activate the model, and
         *     thus might perform better in noisy environments.
         *      */
        threshold?: number
        /** @description Used only for `server_vad` mode. Amount of audio to include before the VAD detected speech (in
         *     milliseconds). Defaults to 300ms.
         *      */
        prefix_padding_ms?: number
        /** @description Used only for `server_vad` mode. Duration of silence to detect speech stop (in milliseconds). Defaults
         *     to 500ms. With shorter values the model will respond more quickly,
         *     but may jump in on short pauses from the user.
         *      */
        silence_duration_ms?: number
        /**
         * @description Whether or not to automatically generate a response when a VAD stop event occurs.
         *
         * @default true
         */
        create_response: boolean
        /**
         * @description Whether or not to automatically interrupt any ongoing response with output to the default
         *     conversation (i.e. `conversation` of `auto`) when a VAD start event occurs.
         *
         * @default true
         */
        interrupt_response: boolean
      }
      /**
       * @description Configuration for input audio noise reduction. This can be set to `null` to turn off.
       *     Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model.
       *     Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.
       *
       * @default null
       */
      input_audio_noise_reduction: {
        /**
         * @description Type of noise reduction. `near_field` is for close-talking microphones such as headphones, `far_field` is for far-field microphones such as laptop or conference room microphones.
         *
         * @enum {string}
         */
        type?: 'near_field' | 'far_field'
      }
      /** @description Tools (functions) available to the model. */
      tools?: {
        /**
         * @description The type of the tool, i.e. `function`.
         * @enum {string}
         */
        type?: 'function'
        /** @description The name of the function. */
        name?: string
        /** @description The description of the function, including guidance on when and how
         *     to call it, and guidance about what to tell the user when calling
         *     (if anything).
         *      */
        description?: string
        /** @description Parameters of the function in JSON Schema. */
        parameters?: Record<string, never>
      }[]
      /**
       * @description How the model chooses tools. Options are `auto`, `none`, `required`, or
       *     specify a function.
       *
       * @default auto
       */
      tool_choice: string
      /**
       * @description Sampling temperature for the model, limited to [0.6, 1.2]. For audio models a temperature of 0.8 is highly recommended for best performance.
       *
       * @default 0.8
       */
      temperature: number
      /** @description Maximum number of output tokens for a single assistant response,
       *     inclusive of tool calls. Provide an integer between 1 and 4096 to
       *     limit output tokens, or `inf` for the maximum available tokens for a
       *     given model. Defaults to `inf`.
       *      */
      max_response_output_tokens?: number | 'inf'
    }
    /** @description A new Realtime session configuration, with an ephermeral key. Default TTL
     *     for keys is one minute.
     *      */
    RealtimeSessionCreateResponse: {
      /** @description Ephemeral key returned by the API. */
      client_secret: {
        /** @description Ephemeral key usable in client environments to authenticate connections
         *     to the Realtime API. Use this in client-side environments rather than
         *     a standard API token, which should only be used server-side.
         *      */
        value: string
        /** @description Timestamp for when the token expires. Currently, all tokens expire
         *     after one minute.
         *      */
        expires_at: number
      }
      /** @description The set of modalities the model can respond with. To disable audio,
       *     set this to ["text"].
       *      */
      modalities?: unknown
      /** @description The default system instructions (i.e. system message) prepended to model
       *     calls. This field allows the client to guide the model on desired
       *     responses. The model can be instructed on response content and format,
       *     (e.g. "be extremely succinct", "act friendly", "here are examples of good
       *     responses") and on audio behavior (e.g. "talk quickly", "inject emotion
       *     into your voice", "laugh frequently"). The instructions are not guaranteed
       *     to be followed by the model, but they provide guidance to the model on the
       *     desired behavior.
       *
       *     Note that the server sets default instructions which will be used if this
       *     field is not set and are visible in the `session.created` event at the
       *     start of the session.
       *      */
      instructions?: string
      /** @description The voice the model uses to respond. Voice cannot be changed during the
       *     session once the model has responded with audio at least once. Current
       *     voice options are `alloy`, `ash`, `ballad`, `coral`, `echo` `sage`,
       *     `shimmer` and `verse`.
       *      */
      voice?: components['schemas']['VoiceIdsShared']
      /** @description The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *      */
      input_audio_format?: string
      /** @description The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *      */
      output_audio_format?: string
      /** @description Configuration for input audio transcription, defaults to off and can be
       *     set to `null` to turn off once on. Input audio transcription is not native
       *     to the model, since the model consumes audio directly. Transcription runs
       *     asynchronously through Whisper and should be treated as rough guidance
       *     rather than the representation understood by the model.
       *      */
      input_audio_transcription?: {
        /** @description The model to use for transcription, `whisper-1` is the only currently
         *     supported model.
         *      */
        model?: string
      }
      /** @description Configuration for turn detection. Can be set to `null` to turn off. Server
       *     VAD means that the model will detect the start and end of speech based on
       *     audio volume and respond at the end of user speech.
       *      */
      turn_detection?: {
        /** @description Type of turn detection, only `server_vad` is currently supported.
         *      */
        type?: string
        /** @description Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
         *     higher threshold will require louder audio to activate the model, and
         *     thus might perform better in noisy environments.
         *      */
        threshold?: number
        /** @description Amount of audio to include before the VAD detected speech (in
         *     milliseconds). Defaults to 300ms.
         *      */
        prefix_padding_ms?: number
        /** @description Duration of silence to detect speech stop (in milliseconds). Defaults
         *     to 500ms. With shorter values the model will respond more quickly,
         *     but may jump in on short pauses from the user.
         *      */
        silence_duration_ms?: number
      }
      /** @description Tools (functions) available to the model. */
      tools?: {
        /**
         * @description The type of the tool, i.e. `function`.
         * @enum {string}
         */
        type?: 'function'
        /** @description The name of the function. */
        name?: string
        /** @description The description of the function, including guidance on when and how
         *     to call it, and guidance about what to tell the user when calling
         *     (if anything).
         *      */
        description?: string
        /** @description Parameters of the function in JSON Schema. */
        parameters?: Record<string, never>
      }[]
      /** @description How the model chooses tools. Options are `auto`, `none`, `required`, or
       *     specify a function.
       *      */
      tool_choice?: string
      /** @description Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
       *      */
      temperature?: number
      /** @description Maximum number of output tokens for a single assistant response,
       *     inclusive of tool calls. Provide an integer between 1 and 4096 to
       *     limit output tokens, or `inf` for the maximum available tokens for a
       *     given model. Defaults to `inf`.
       *      */
      max_response_output_tokens?: number | 'inf'
    }
    /** @description Realtime transcription session object configuration. */
    RealtimeTranscriptionSessionCreateRequest: {
      /** @description The set of modalities the model can respond with. To disable audio,
       *     set this to ["text"].
       *      */
      modalities?: unknown
      /**
       * @description The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *     For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,
       *     single channel (mono), and little-endian byte order.
       *
       * @default pcm16
       * @enum {string}
       */
      input_audio_format: 'pcm16' | 'g711_ulaw' | 'g711_alaw'
      /** @description Configuration for input audio transcription. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.
       *      */
      input_audio_transcription?: {
        /**
         * @description The model to use for transcription, current options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1`.
         *
         * @enum {string}
         */
        model?: 'gpt-4o-transcribe' | 'gpt-4o-mini-transcribe' | 'whisper-1'
        /** @description The language of the input audio. Supplying the input language in
         *     [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format
         *     will improve accuracy and latency.
         *      */
        language?: string
        /** @description An optional text to guide the model's style or continue a previous audio
         *     segment.
         *     For `whisper-1`, the [prompt is a list of keywords](/docs/guides/speech-to-text#prompting).
         *     For `gpt-4o-transcribe` models, the prompt is a free text string, for example "expect words related to technology".
         *      */
        prompt?: string
      }
      /** @description Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response.
       *     Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.
       *     Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.
       *      */
      turn_detection?: {
        /**
         * @description Type of turn detection.
         *
         * @default server_vad
         * @enum {string}
         */
        type: 'server_vad' | 'semantic_vad'
        /**
         * @description Used only for `semantic_vad` mode. The eagerness of the model to respond. `low` will wait longer for the user to continue speaking, `high` will respond more quickly. `auto` is the default and is equivalent to `medium`.
         *
         * @default auto
         * @enum {string}
         */
        eagerness: 'low' | 'medium' | 'high' | 'auto'
        /** @description Used only for `server_vad` mode. Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
         *     higher threshold will require louder audio to activate the model, and
         *     thus might perform better in noisy environments.
         *      */
        threshold?: number
        /** @description Used only for `server_vad` mode. Amount of audio to include before the VAD detected speech (in
         *     milliseconds). Defaults to 300ms.
         *      */
        prefix_padding_ms?: number
        /** @description Used only for `server_vad` mode. Duration of silence to detect speech stop (in milliseconds). Defaults
         *     to 500ms. With shorter values the model will respond more quickly,
         *     but may jump in on short pauses from the user.
         *      */
        silence_duration_ms?: number
        /**
         * @description Whether or not to automatically generate a response when a VAD stop event occurs. Not available for transcription sessions.
         *
         * @default true
         */
        create_response: boolean
        /**
         * @description Whether or not to automatically interrupt any ongoing response with output to the default
         *     conversation (i.e. `conversation` of `auto`) when a VAD start event occurs. Not available for transcription sessions.
         *
         * @default true
         */
        interrupt_response: boolean
      }
      /**
       * @description Configuration for input audio noise reduction. This can be set to `null` to turn off.
       *     Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model.
       *     Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.
       *
       * @default null
       */
      input_audio_noise_reduction: {
        /**
         * @description Type of noise reduction. `near_field` is for close-talking microphones such as headphones, `far_field` is for far-field microphones such as laptop or conference room microphones.
         *
         * @enum {string}
         */
        type?: 'near_field' | 'far_field'
      }
      /** @description The set of items to include in the transcription. Current available items are:
       *     - `item.input_audio_transcription.logprobs`
       *      */
      include?: string[]
    }
    /** @description A new Realtime transcription session configuration.
     *
     *     When a session is created on the server via REST API, the session object
     *     also contains an ephemeral key. Default TTL for keys is one minute. This
     *     property is not present when a session is updated via the WebSocket API.
     *      */
    RealtimeTranscriptionSessionCreateResponse: {
      /** @description Ephemeral key returned by the API. Only present when the session is
       *     created on the server via REST API.
       *      */
      client_secret: {
        /** @description Ephemeral key usable in client environments to authenticate connections
         *     to the Realtime API. Use this in client-side environments rather than
         *     a standard API token, which should only be used server-side.
         *      */
        value: string
        /** @description Timestamp for when the token expires. Currently, all tokens expire
         *     after one minute.
         *      */
        expires_at: number
      }
      /** @description The set of modalities the model can respond with. To disable audio,
       *     set this to ["text"].
       *      */
      modalities?: unknown
      /** @description The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
       *      */
      input_audio_format?: string
      /** @description Configuration of the transcription model.
       *      */
      input_audio_transcription?: {
        /**
         * @description The model to use for transcription. Can be `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, or `whisper-1`.
         *
         * @enum {string}
         */
        model?: 'gpt-4o-transcribe' | 'gpt-4o-mini-transcribe' | 'whisper-1'
        /** @description The language of the input audio. Supplying the input language in
         *     [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format
         *     will improve accuracy and latency.
         *      */
        language?: string
        /** @description An optional text to guide the model's style or continue a previous audio
         *     segment. The [prompt](/docs/guides/speech-to-text#prompting) should match
         *     the audio language.
         *      */
        prompt?: string
      }
      /** @description Configuration for turn detection. Can be set to `null` to turn off. Server
       *     VAD means that the model will detect the start and end of speech based on
       *     audio volume and respond at the end of user speech.
       *      */
      turn_detection?: {
        /** @description Type of turn detection, only `server_vad` is currently supported.
         *      */
        type?: string
        /** @description Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A
         *     higher threshold will require louder audio to activate the model, and
         *     thus might perform better in noisy environments.
         *      */
        threshold?: number
        /** @description Amount of audio to include before the VAD detected speech (in
         *     milliseconds). Defaults to 300ms.
         *      */
        prefix_padding_ms?: number
        /** @description Duration of silence to detect speech stop (in milliseconds). Defaults
         *     to 500ms. With shorter values the model will respond more quickly,
         *     but may jump in on short pauses from the user.
         *      */
        silence_duration_ms?: number
      }
    }
    /**
     * Reasoning
     * @description **o-series models only**
     *
     *     Configuration options for
     *     [reasoning models](https://platform.openai.com/docs/guides/reasoning).
     *
     */
    Reasoning: {
      effort?: components['schemas']['ReasoningEffort']
      /**
       * @description **computer_use_preview only**
       *
       *     A summary of the reasoning performed by the model. This can be
       *     useful for debugging and understanding the model's reasoning process.
       *     One of `concise` or `detailed`.
       *
       * @enum {string|null}
       */
      generate_summary?: 'concise' | 'detailed' | null
    }
    /**
     * @description **o-series models only**
     *
     *     Constrains effort on reasoning for
     *     [reasoning models](https://platform.openai.com/docs/guides/reasoning).
     *     Currently supported values are `low`, `medium`, and `high`. Reducing
     *     reasoning effort can result in faster responses and fewer tokens used
     *     on reasoning in a response.
     *
     * @default medium
     * @enum {string|null}
     */
    ReasoningEffort: 'low' | 'medium' | 'high'
    /**
     * Reasoning
     * @description A description of the chain of thought used by a reasoning model while generating
     *     a response.
     *
     */
    ReasoningItem: {
      /**
       * @description The type of the object. Always `reasoning`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'ReasoningItem'
      /** @description The unique identifier of the reasoning content.
       *      */
      id: string
      /** @description Reasoning text contents.
       *      */
      summary: {
        /**
         * @description The type of the object. Always `summary_text`.
         *
         * @enum {string}
         */
        type: 'summary_text'
        /** @description A short summary of the reasoning used by the model when generating
         *     the response.
         *      */
        text: string
      }[]
      /**
       * @description The status of the item. One of `in_progress`, `completed`, or
       *     `incomplete`. Populated when items are returned via API.
       *
       * @enum {string}
       */
      status?: 'in_progress' | 'completed' | 'incomplete'
    }
    /**
     * Refusal
     * @description A refusal from the model.
     *
     */
    Refusal: {
      /**
       * @description The type of the refusal. Always `refusal`.
       *
       * @enum {string}
       */
      type: 'refusal'
      /** @description The refusal explanationfrom the model.
       *      */
      refusal: string
    }
    Response: components['schemas']['ModelResponseProperties'] &
      components['schemas']['ResponseProperties'] & {
        /** @description Unique identifier for this Response.
         *      */
        id: string
        /**
         * @description The object type of this resource - always set to `response`.
         *
         * @enum {string}
         */
        object: 'response'
        /**
         * @description The status of the response generation. One of `completed`, `failed`,
         *     `in_progress`, or `incomplete`.
         *
         * @enum {string}
         */
        status?: 'completed' | 'failed' | 'in_progress' | 'incomplete'
        /** @description Unix timestamp (in seconds) of when this Response was created.
         *      */
        created_at: number
        error: components['schemas']['ResponseError']
        /** @description Details about why the response is incomplete.
         *      */
        incomplete_details: {
          /**
           * @description The reason why the response is incomplete.
           * @enum {string}
           */
          reason?: 'max_output_tokens' | 'content_filter'
        } | null
        /** @description An array of content items generated by the model.
         *
         *     - The length and order of items in the `output` array is dependent
         *       on the model's response.
         *     - Rather than accessing the first item in the `output` array and
         *       assuming it's an `assistant` message with the content generated by
         *       the model, you might consider using the `output_text` property where
         *       supported in SDKs.
         *      */
        output: components['schemas']['OutputItem'][]
        /** @description SDK-only convenience property that contains the aggregated text output
         *     from all `output_text` items in the `output` array, if any are present.
         *     Supported in the Python and JavaScript SDKs.
         *      */
        output_text?: string | null
        usage?: components['schemas']['ResponseUsage']
        /**
         * @description Whether to allow the model to run tool calls in parallel.
         *
         * @default true
         */
        parallel_tool_calls: boolean
      }
    /** @description Emitted when there is a partial audio response. */
    ResponseAudioDeltaEvent: {
      /**
       * @description The type of the event. Always `response.audio.delta`.
       *
       * @enum {string}
       */
      type: 'response.audio.delta'
      /** @description A chunk of Base64 encoded response audio bytes.
       *      */
      delta: string
    }
    /** @description Emitted when the audio response is complete. */
    ResponseAudioDoneEvent: {
      /**
       * @description The type of the event. Always `response.audio.done`.
       *
       * @enum {string}
       */
      type: 'response.audio.done'
    }
    /** @description Emitted when there is a partial transcript of audio. */
    ResponseAudioTranscriptDeltaEvent: {
      /**
       * @description The type of the event. Always `response.audio.transcript.delta`.
       *
       * @enum {string}
       */
      type: 'response.audio.transcript.delta'
      /** @description The partial transcript of the audio response.
       *      */
      delta: string
    }
    /** @description Emitted when the full audio transcript is completed. */
    ResponseAudioTranscriptDoneEvent: {
      /**
       * @description The type of the event. Always `response.audio.transcript.done`.
       *
       * @enum {string}
       */
      type: 'response.audio.transcript.done'
    }
    /** @description Emitted when a partial code snippet is added by the code interpreter. */
    ResponseCodeInterpreterCallCodeDeltaEvent: {
      /**
       * @description The type of the event. Always `response.code_interpreter_call.code.delta`.
       *
       * @enum {string}
       */
      type: 'response.code_interpreter_call.code.delta'
      /** @description The index of the output item that the code interpreter call is in progress.
       *      */
      output_index: number
      /** @description The partial code snippet added by the code interpreter.
       *      */
      delta: string
    }
    /** @description Emitted when code snippet output is finalized by the code interpreter. */
    ResponseCodeInterpreterCallCodeDoneEvent: {
      /**
       * @description The type of the event. Always `response.code_interpreter_call.code.done`.
       *
       * @enum {string}
       */
      type: 'response.code_interpreter_call.code.done'
      /** @description The index of the output item that the code interpreter call is in progress.
       *      */
      output_index: number
      /** @description The final code snippet output by the code interpreter.
       *      */
      code: string
    }
    /** @description Emitted when the code interpreter call is completed. */
    ResponseCodeInterpreterCallCompletedEvent: {
      /**
       * @description The type of the event. Always `response.code_interpreter_call.completed`.
       *
       * @enum {string}
       */
      type: 'response.code_interpreter_call.completed'
      /** @description The index of the output item that the code interpreter call is in progress.
       *      */
      output_index: number
      code_interpreter_call: components['schemas']['CodeInterpreterToolCall']
    }
    /** @description Emitted when a code interpreter call is in progress. */
    ResponseCodeInterpreterCallInProgressEvent: {
      /**
       * @description The type of the event. Always `response.code_interpreter_call.in_progress`.
       *
       * @enum {string}
       */
      type: 'response.code_interpreter_call.in_progress'
      /** @description The index of the output item that the code interpreter call is in progress.
       *      */
      output_index: number
      code_interpreter_call: components['schemas']['CodeInterpreterToolCall']
    }
    /** @description Emitted when the code interpreter is actively interpreting the code snippet. */
    ResponseCodeInterpreterCallInterpretingEvent: {
      /**
       * @description The type of the event. Always `response.code_interpreter_call.interpreting`.
       *
       * @enum {string}
       */
      type: 'response.code_interpreter_call.interpreting'
      /** @description The index of the output item that the code interpreter call is in progress.
       *      */
      output_index: number
      code_interpreter_call: components['schemas']['CodeInterpreterToolCall']
    }
    /** @description Emitted when the model response is complete. */
    ResponseCompletedEvent: {
      /**
       * @description The type of the event. Always `response.completed`.
       *
       * @enum {string}
       */
      type: 'response.completed'
      /** @description Properties of the completed response.
       *      */
      response: components['schemas']['Response']
    }
    /** @description Emitted when a new content part is added. */
    ResponseContentPartAddedEvent: {
      /**
       * @description The type of the event. Always `response.content_part.added`.
       *
       * @enum {string}
       */
      type: 'response.content_part.added'
      /** @description The ID of the output item that the content part was added to.
       *      */
      item_id: string
      /** @description The index of the output item that the content part was added to.
       *      */
      output_index: number
      /** @description The index of the content part that was added.
       *      */
      content_index: number
      /** @description The content part that was added.
       *      */
      part: components['schemas']['OutputContent']
    }
    /** @description Emitted when a content part is done. */
    ResponseContentPartDoneEvent: {
      /**
       * @description The type of the event. Always `response.content_part.done`.
       *
       * @enum {string}
       */
      type: 'response.content_part.done'
      /** @description The ID of the output item that the content part was added to.
       *      */
      item_id: string
      /** @description The index of the output item that the content part was added to.
       *      */
      output_index: number
      /** @description The index of the content part that is done.
       *      */
      content_index: number
      /** @description The content part that is done.
       *      */
      part: components['schemas']['OutputContent']
    }
    /** @description An event that is emitted when a response is created.
     *      */
    ResponseCreatedEvent: {
      /**
       * @description The type of the event. Always `response.created`.
       *
       * @enum {string}
       */
      type: 'response.created'
      /** @description The response that was created.
       *      */
      response: components['schemas']['Response']
    }
    /** @description An error object returned when the model fails to generate a Response.
     *      */
    ResponseError: {
      code: components['schemas']['ResponseErrorCode']
      /** @description A human-readable description of the error.
       *      */
      message: string
    } | null
    /**
     * @description The error code for the response.
     *
     * @enum {string}
     */
    ResponseErrorCode:
      | 'server_error'
      | 'rate_limit_exceeded'
      | 'invalid_prompt'
      | 'vector_store_timeout'
      | 'invalid_image'
      | 'invalid_image_format'
      | 'invalid_base64_image'
      | 'invalid_image_url'
      | 'image_too_large'
      | 'image_too_small'
      | 'image_parse_error'
      | 'image_content_policy_violation'
      | 'invalid_image_mode'
      | 'image_file_too_large'
      | 'unsupported_image_media_type'
      | 'empty_image_file'
      | 'failed_to_download_image'
      | 'image_file_not_found'
    /** @description Emitted when an error occurs. */
    ResponseErrorEvent: {
      /**
       * @description The type of the event. Always `error`.
       *
       * @enum {string}
       */
      type: 'error'
      /** @description The error code.
       *      */
      code: string | null
      /** @description The error message.
       *      */
      message: string
      /** @description The error parameter.
       *      */
      param: string | null
    }
    /** @description An event that is emitted when a response fails.
     *      */
    ResponseFailedEvent: {
      /**
       * @description The type of the event. Always `response.failed`.
       *
       * @enum {string}
       */
      type: 'response.failed'
      /** @description The response that failed.
       *      */
      response: components['schemas']['Response']
    }
    /** @description Emitted when a file search call is completed (results found). */
    ResponseFileSearchCallCompletedEvent: {
      /**
       * @description The type of the event. Always `response.file_search_call.completed`.
       *
       * @enum {string}
       */
      type: 'response.file_search_call.completed'
      /** @description The index of the output item that the file search call is initiated.
       *      */
      output_index: number
      /** @description The ID of the output item that the file search call is initiated.
       *      */
      item_id: string
    }
    /** @description Emitted when a file search call is initiated. */
    ResponseFileSearchCallInProgressEvent: {
      /**
       * @description The type of the event. Always `response.file_search_call.in_progress`.
       *
       * @enum {string}
       */
      type: 'response.file_search_call.in_progress'
      /** @description The index of the output item that the file search call is initiated.
       *      */
      output_index: number
      /** @description The ID of the output item that the file search call is initiated.
       *      */
      item_id: string
    }
    /** @description Emitted when a file search is currently searching. */
    ResponseFileSearchCallSearchingEvent: {
      /**
       * @description The type of the event. Always `response.file_search_call.searching`.
       *
       * @enum {string}
       */
      type: 'response.file_search_call.searching'
      /** @description The index of the output item that the file search call is searching.
       *      */
      output_index: number
      /** @description The ID of the output item that the file search call is initiated.
       *      */
      item_id: string
    }
    /**
     * JSON object
     * @description JSON object response format. An older method of generating JSON responses.
     *     Using `json_schema` is recommended for models that support it. Note that the
     *     model will not generate JSON without a system or user message instructing it
     *     to do so.
     *
     */
    ResponseFormatJsonObject: {
      /**
       * @description The type of response format being defined. Always `json_object`.
       * @enum {string}
       */
      type: 'json_object'
    }
    /**
     * JSON schema
     * @description JSON Schema response format. Used to generate structured JSON responses.
     *     Learn more about [Structured Outputs](/docs/guides/structured-outputs).
     *
     */
    ResponseFormatJsonSchema: {
      /**
       * @description The type of response format being defined. Always `json_schema`.
       * @enum {string}
       */
      type: 'json_schema'
      /**
       * JSON schema
       * @description Structured Outputs configuration options, including a JSON Schema.
       *
       */
      json_schema: {
        /** @description A description of what the response format is for, used by the model to
         *     determine how to respond in the format.
         *      */
        description?: string
        /** @description The name of the response format. Must be a-z, A-Z, 0-9, or contain
         *     underscores and dashes, with a maximum length of 64.
         *      */
        name: string
        schema?: components['schemas']['ResponseFormatJsonSchemaSchema']
        /**
         * @description Whether to enable strict schema adherence when generating the output.
         *     If set to true, the model will always follow the exact schema defined
         *     in the `schema` field. Only a subset of JSON Schema is supported when
         *     `strict` is `true`. To learn more, read the [Structured Outputs
         *     guide](/docs/guides/structured-outputs).
         *
         * @default false
         */
        strict: boolean | null
      }
    }
    /**
     * JSON schema
     * @description The schema for the response format, described as a JSON Schema object.
     *     Learn how to build JSON schemas [here](https://json-schema.org/).
     *
     */
    ResponseFormatJsonSchemaSchema: {
      [key: string]: unknown
    }
    /**
     * Text
     * @description Default response format. Used to generate text responses.
     *
     */
    ResponseFormatText: {
      /**
       * @description The type of response format being defined. Always `text`.
       * @enum {string}
       */
      type: 'text'
    }
    /** @description Emitted when there is a partial function-call arguments delta. */
    ResponseFunctionCallArgumentsDeltaEvent: {
      /**
       * @description The type of the event. Always `response.function_call_arguments.delta`.
       *
       * @enum {string}
       */
      type: 'response.function_call_arguments.delta'
      /** @description The ID of the output item that the function-call arguments delta is added to.
       *      */
      item_id: string
      /** @description The index of the output item that the function-call arguments delta is added to.
       *      */
      output_index: number
      /** @description The function-call arguments delta that is added.
       *      */
      delta: string
    }
    /** @description Emitted when function-call arguments are finalized. */
    ResponseFunctionCallArgumentsDoneEvent: {
      /** @enum {string} */
      type: 'response.function_call_arguments.done'
      /** @description The ID of the item. */
      item_id: string
      /** @description The index of the output item. */
      output_index: number
      /** @description The function-call arguments. */
      arguments: string
    }
    /** @description Emitted when the response is in progress. */
    ResponseInProgressEvent: {
      /**
       * @description The type of the event. Always `response.in_progress`.
       *
       * @enum {string}
       */
      type: 'response.in_progress'
      /** @description The response that is in progress.
       *      */
      response: components['schemas']['Response']
    }
    /** @description An event that is emitted when a response finishes as incomplete.
     *      */
    ResponseIncompleteEvent: {
      /**
       * @description The type of the event. Always `response.incomplete`.
       *
       * @enum {string}
       */
      type: 'response.incomplete'
      /** @description The response that was incomplete.
       *      */
      response: components['schemas']['Response']
    }
    /** @description A list of Response items. */
    ResponseItemList: {
      /**
       * @description The type of object returned, must be `list`.
       * @enum {string}
       */
      object: 'list'
      /** @description A list of items used to generate this response. */
      data: components['schemas']['ItemResource'][]
      /** @description Whether there are more items available. */
      has_more: boolean
      /** @description The ID of the first item in the list. */
      first_id: string
      /** @description The ID of the last item in the list. */
      last_id: string
    }
    /** @description Output types that you would like the model to generate.
     *     Most models are capable of generating text, which is the default:
     *
     *     `["text"]`
     *
     *     The `gpt-4o-audio-preview` model can also be used to
     *     [generate audio](/docs/guides/audio). To request that this model generate
     *     both text and audio responses, you can use:
     *
     *     `["text", "audio"]`
     *      */
    ResponseModalities: ('text' | 'audio')[] | null
    /** @description Output types that you would like the model to generate.
     *     Most models are capable of generating text, which is the default:
     *
     *     `["text"]`
     *
     *     This API will soon support other output modalities, including audio and images.
     *      */
    ResponseModalitiesTextOnly: 'text'[] | null
    /** @description Emitted when a new output item is added. */
    ResponseOutputItemAddedEvent: {
      /**
       * @description The type of the event. Always `response.output_item.added`.
       *
       * @enum {string}
       */
      type: 'response.output_item.added'
      /** @description The index of the output item that was added.
       *      */
      output_index: number
      /** @description The output item that was added.
       *      */
      item: components['schemas']['OutputItem']
    }
    /** @description Emitted when an output item is marked done. */
    ResponseOutputItemDoneEvent: {
      /**
       * @description The type of the event. Always `response.output_item.done`.
       *
       * @enum {string}
       */
      type: 'response.output_item.done'
      /** @description The index of the output item that was marked done.
       *      */
      output_index: number
      /** @description The output item that was marked done.
       *      */
      item: components['schemas']['OutputItem']
    }
    ResponseProperties: {
      /** @description The unique ID of the previous response to the model. Use this to
       *     create multi-turn conversations. Learn more about
       *     [conversation state](/docs/guides/conversation-state).
       *      */
      previous_response_id?: string | null
      /** @description Model ID used to generate the response, like `gpt-4o` or `o1`. OpenAI
       *     offers a wide range of models with different capabilities, performance
       *     characteristics, and price points. Refer to the [model guide](/docs/models)
       *     to browse and compare available models.
       *      */
      model?: components['schemas']['ModelIdsResponses']
      reasoning?: components['schemas']['Reasoning']
      /** @description An upper bound for the number of tokens that can be generated for a response, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).
       *      */
      max_output_tokens?: number | null
      /** @description Inserts a system (or developer) message as the first item in the model's context.
       *
       *     When using along with `previous_response_id`, the instructions from a previous
       *     response will be not be carried over to the next response. This makes it simple
       *     to swap out system (or developer) messages in new responses.
       *      */
      instructions?: string | null
      /** @description Configuration options for a text response from the model. Can be plain
       *     text or structured JSON data. Learn more:
       *     - [Text inputs and outputs](/docs/guides/text)
       *     - [Structured Outputs](/docs/guides/structured-outputs)
       *      */
      text?: {
        format?: components['schemas']['TextResponseFormatConfiguration']
      }
      /** @description An array of tools the model may call while generating a response. You
       *     can specify which tool to use by setting the `tool_choice` parameter.
       *
       *     The two categories of tools you can provide the model are:
       *
       *     - **Built-in tools**: Tools that are provided by OpenAI that extend the
       *       model's capabilities, like [web search](/docs/guides/tools-web-search)
       *       or [file search](/docs/guides/tools-file-search). Learn more about
       *       [built-in tools](/docs/guides/tools).
       *     - **Function calls (custom tools)**: Functions that are defined by you,
       *       enabling the model to call your own code. Learn more about
       *       [function calling](/docs/guides/function-calling).
       *      */
      tools?: components['schemas']['Tool'][]
      /** @description How the model should select which tool (or tools) to use when generating
       *     a response. See the `tools` parameter to see how to specify which tools
       *     the model can call.
       *      */
      tool_choice?:
        | components['schemas']['ToolChoiceOptions']
        | components['schemas']['ToolChoiceTypes']
        | components['schemas']['ToolChoiceFunction']
      /**
       * @description The truncation strategy to use for the model response.
       *     - `auto`: If the context of this response and previous ones exceeds
       *       the model's context window size, the model will truncate the
       *       response to fit the context window by dropping input items in the
       *       middle of the conversation.
       *     - `disabled` (default): If a model response will exceed the context window
       *       size for a model, the request will fail with a 400 error.
       *
       * @default disabled
       * @enum {string|null}
       */
      truncation: 'auto' | 'disabled'
    }
    /** @description Emitted when there is a partial refusal text. */
    ResponseRefusalDeltaEvent: {
      /**
       * @description The type of the event. Always `response.refusal.delta`.
       *
       * @enum {string}
       */
      type: 'response.refusal.delta'
      /** @description The ID of the output item that the refusal text is added to.
       *      */
      item_id: string
      /** @description The index of the output item that the refusal text is added to.
       *      */
      output_index: number
      /** @description The index of the content part that the refusal text is added to.
       *      */
      content_index: number
      /** @description The refusal text that is added.
       *      */
      delta: string
    }
    /** @description Emitted when refusal text is finalized. */
    ResponseRefusalDoneEvent: {
      /**
       * @description The type of the event. Always `response.refusal.done`.
       *
       * @enum {string}
       */
      type: 'response.refusal.done'
      /** @description The ID of the output item that the refusal text is finalized.
       *      */
      item_id: string
      /** @description The index of the output item that the refusal text is finalized.
       *      */
      output_index: number
      /** @description The index of the content part that the refusal text is finalized.
       *      */
      content_index: number
      /** @description The refusal text that is finalized.
       *      */
      refusal: string
    }
    ResponseStreamEvent:
      | components['schemas']['ResponseAudioDeltaEvent']
      | components['schemas']['ResponseAudioDoneEvent']
      | components['schemas']['ResponseAudioTranscriptDeltaEvent']
      | components['schemas']['ResponseAudioTranscriptDoneEvent']
      | components['schemas']['ResponseCodeInterpreterCallCodeDeltaEvent']
      | components['schemas']['ResponseCodeInterpreterCallCodeDoneEvent']
      | components['schemas']['ResponseCodeInterpreterCallCompletedEvent']
      | components['schemas']['ResponseCodeInterpreterCallInProgressEvent']
      | components['schemas']['ResponseCodeInterpreterCallInterpretingEvent']
      | components['schemas']['ResponseCompletedEvent']
      | components['schemas']['ResponseContentPartAddedEvent']
      | components['schemas']['ResponseContentPartDoneEvent']
      | components['schemas']['ResponseCreatedEvent']
      | components['schemas']['ResponseErrorEvent']
      | components['schemas']['ResponseFileSearchCallCompletedEvent']
      | components['schemas']['ResponseFileSearchCallInProgressEvent']
      | components['schemas']['ResponseFileSearchCallSearchingEvent']
      | components['schemas']['ResponseFunctionCallArgumentsDeltaEvent']
      | components['schemas']['ResponseFunctionCallArgumentsDoneEvent']
      | components['schemas']['ResponseInProgressEvent']
      | components['schemas']['ResponseFailedEvent']
      | components['schemas']['ResponseIncompleteEvent']
      | components['schemas']['ResponseOutputItemAddedEvent']
      | components['schemas']['ResponseOutputItemDoneEvent']
      | components['schemas']['ResponseRefusalDeltaEvent']
      | components['schemas']['ResponseRefusalDoneEvent']
      | components['schemas']['ResponseTextAnnotationDeltaEvent']
      | components['schemas']['ResponseTextDeltaEvent']
      | components['schemas']['ResponseTextDoneEvent']
      | components['schemas']['ResponseWebSearchCallCompletedEvent']
      | components['schemas']['ResponseWebSearchCallInProgressEvent']
      | components['schemas']['ResponseWebSearchCallSearchingEvent']
    /** @description Emitted when a text annotation is added. */
    ResponseTextAnnotationDeltaEvent: {
      /**
       * @description The type of the event. Always `response.output_text.annotation.added`.
       *
       * @enum {string}
       */
      type: 'response.output_text.annotation.added'
      /** @description The ID of the output item that the text annotation was added to.
       *      */
      item_id: string
      /** @description The index of the output item that the text annotation was added to.
       *      */
      output_index: number
      /** @description The index of the content part that the text annotation was added to.
       *      */
      content_index: number
      /** @description The index of the annotation that was added.
       *      */
      annotation_index: number
      annotation: components['schemas']['Annotation']
    }
    /** @description Emitted when there is an additional text delta. */
    ResponseTextDeltaEvent: {
      /**
       * @description The type of the event. Always `response.output_text.delta`.
       *
       * @enum {string}
       */
      type: 'response.output_text.delta'
      /** @description The ID of the output item that the text delta was added to.
       *      */
      item_id: string
      /** @description The index of the output item that the text delta was added to.
       *      */
      output_index: number
      /** @description The index of the content part that the text delta was added to.
       *      */
      content_index: number
      /** @description The text delta that was added.
       *      */
      delta: string
    }
    /** @description Emitted when text content is finalized. */
    ResponseTextDoneEvent: {
      /**
       * @description The type of the event. Always `response.output_text.done`.
       *
       * @enum {string}
       */
      type: 'response.output_text.done'
      /** @description The ID of the output item that the text content is finalized.
       *      */
      item_id: string
      /** @description The index of the output item that the text content is finalized.
       *      */
      output_index: number
      /** @description The index of the content part that the text content is finalized.
       *      */
      content_index: number
      /** @description The text content that is finalized.
       *      */
      text: string
    }
    /** @description Represents token usage details including input tokens, output tokens,
     *     a breakdown of output tokens, and the total tokens used.
     *      */
    ResponseUsage: {
      /** @description The number of input tokens. */
      input_tokens: number
      /** @description A detailed breakdown of the input tokens. */
      input_tokens_details: {
        /** @description The number of tokens that were retrieved from the cache.
         *     [More on prompt caching](/docs/guides/prompt-caching).
         *      */
        cached_tokens: number
      }
      /** @description The number of output tokens. */
      output_tokens: number
      /** @description A detailed breakdown of the output tokens. */
      output_tokens_details: {
        /** @description The number of reasoning tokens. */
        reasoning_tokens: number
      }
      /** @description The total number of tokens used. */
      total_tokens: number
    }
    /** @description Emitted when a web search call is completed. */
    ResponseWebSearchCallCompletedEvent: {
      /**
       * @description The type of the event. Always `response.web_search_call.completed`.
       *
       * @enum {string}
       */
      type: 'response.web_search_call.completed'
      /** @description The index of the output item that the web search call is associated with.
       *      */
      output_index: number
      /** @description Unique ID for the output item associated with the web search call.
       *      */
      item_id: string
    }
    /** @description Emitted when a web search call is initiated. */
    ResponseWebSearchCallInProgressEvent: {
      /**
       * @description The type of the event. Always `response.web_search_call.in_progress`.
       *
       * @enum {string}
       */
      type: 'response.web_search_call.in_progress'
      /** @description The index of the output item that the web search call is associated with.
       *      */
      output_index: number
      /** @description Unique ID for the output item associated with the web search call.
       *      */
      item_id: string
    }
    /** @description Emitted when a web search call is executing. */
    ResponseWebSearchCallSearchingEvent: {
      /**
       * @description The type of the event. Always `response.web_search_call.searching`.
       *
       * @enum {string}
       */
      type: 'response.web_search_call.searching'
      /** @description The index of the output item that the web search call is associated with.
       *      */
      output_index: number
      /** @description Unique ID for the output item associated with the web search call.
       *      */
      item_id: string
    }
    /** @description Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
    RunCompletionUsage: {
      /** @description Number of completion tokens used over the course of the run. */
      completion_tokens: number
      /** @description Number of prompt tokens used over the course of the run. */
      prompt_tokens: number
      /** @description Total number of tokens used (prompt + completion). */
      total_tokens: number
    } | null
    /**
     * A run on a thread
     * @description Represents an execution run on a [thread](/docs/api-reference/threads).
     */
    RunObject: {
      /** @description The identifier, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `thread.run`.
       * @enum {string}
       */
      object: 'thread.run'
      /** @description The Unix timestamp (in seconds) for when the run was created. */
      created_at: number
      /** @description The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run. */
      thread_id: string
      /** @description The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run. */
      assistant_id: string
      /**
       * @description The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`.
       * @enum {string}
       */
      status:
        | 'queued'
        | 'in_progress'
        | 'requires_action'
        | 'cancelling'
        | 'cancelled'
        | 'failed'
        | 'completed'
        | 'incomplete'
        | 'expired'
      /** @description Details on the action required to continue the run. Will be `null` if no action is required. */
      required_action: {
        /**
         * @description For now, this is always `submit_tool_outputs`.
         * @enum {string}
         */
        type: 'submit_tool_outputs'
        /** @description Details on the tool outputs needed for this run to continue. */
        submit_tool_outputs: {
          /** @description A list of the relevant tool calls. */
          tool_calls: components['schemas']['RunToolCallObject'][]
        }
      } | null
      /** @description The last error associated with this run. Will be `null` if there are no errors. */
      last_error: {
        /**
         * @description One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
         * @enum {string}
         */
        code: 'server_error' | 'rate_limit_exceeded' | 'invalid_prompt'
        /** @description A human-readable description of the error. */
        message: string
      } | null
      /** @description The Unix timestamp (in seconds) for when the run will expire. */
      expires_at: number | null
      /** @description The Unix timestamp (in seconds) for when the run was started. */
      started_at: number | null
      /** @description The Unix timestamp (in seconds) for when the run was cancelled. */
      cancelled_at: number | null
      /** @description The Unix timestamp (in seconds) for when the run failed. */
      failed_at: number | null
      /** @description The Unix timestamp (in seconds) for when the run was completed. */
      completed_at: number | null
      /** @description Details on why the run is incomplete. Will be `null` if the run is not incomplete. */
      incomplete_details: {
        /**
         * @description The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run.
         * @enum {string}
         */
        reason?: 'max_completion_tokens' | 'max_prompt_tokens'
      } | null
      /** @description The model that the [assistant](/docs/api-reference/assistants) used for this run. */
      model: string
      /** @description The instructions that the [assistant](/docs/api-reference/assistants) used for this run. */
      instructions: string
      /**
       * @description The list of tools that the [assistant](/docs/api-reference/assistants) used for this run.
       * @default []
       */
      tools: (
        | components['schemas']['AssistantToolsCode']
        | components['schemas']['AssistantToolsFileSearch']
        | components['schemas']['AssistantToolsFunction']
      )[]
      metadata: components['schemas']['Metadata']
      usage: components['schemas']['RunCompletionUsage']
      /** @description The sampling temperature used for this run. If not set, defaults to 1. */
      temperature?: number | null
      /** @description The nucleus sampling value used for this run. If not set, defaults to 1. */
      top_p?: number | null
      /** @description The maximum number of prompt tokens specified to have been used over the course of the run.
       *      */
      max_prompt_tokens: number | null
      /** @description The maximum number of completion tokens specified to have been used over the course of the run.
       *      */
      max_completion_tokens: number | null
      truncation_strategy: components['schemas']['TruncationObject'] & unknown
      tool_choice: components['schemas']['AssistantsApiToolChoiceOption'] &
        unknown
      parallel_tool_calls: components['schemas']['ParallelToolCalls']
      response_format: components['schemas']['AssistantsApiResponseFormatOption']
    }
    /** @description Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`. */
    RunStepCompletionUsage: {
      /** @description Number of completion tokens used over the course of the run step. */
      completion_tokens: number
      /** @description Number of prompt tokens used over the course of the run step. */
      prompt_tokens: number
      /** @description Total number of tokens used (prompt + completion). */
      total_tokens: number
    } | null
    /**
     * Run step delta object
     * @description Represents a run step delta i.e. any changed fields on a run step during streaming.
     *
     */
    RunStepDeltaObject: {
      /** @description The identifier of the run step, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `thread.run.step.delta`.
       * @enum {string}
       */
      object: 'thread.run.step.delta'
      /** @description The delta containing the fields that have changed on the run step. */
      delta: {
        /** @description The details of the run step. */
        step_details?:
          | components['schemas']['RunStepDeltaStepDetailsMessageCreationObject']
          | components['schemas']['RunStepDeltaStepDetailsToolCallsObject']
      }
    }
    /**
     * Message creation
     * @description Details of the message creation by the run step.
     */
    RunStepDeltaStepDetailsMessageCreationObject: {
      /**
       * @description Always `message_creation`.
       * @enum {string}
       */
      type: 'message_creation'
      message_creation?: {
        /** @description The ID of the message that was created by this run step. */
        message_id?: string
      }
    }
    /**
     * Code interpreter tool call
     * @description Details of the Code Interpreter tool call the run step was involved in.
     */
    RunStepDeltaStepDetailsToolCallsCodeObject: {
      /** @description The index of the tool call in the tool calls array. */
      index: number
      /** @description The ID of the tool call. */
      id?: string
      /**
       * @description The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
       * @enum {string}
       */
      type: 'code_interpreter'
      /** @description The Code Interpreter tool call definition. */
      code_interpreter?: {
        /** @description The input to the Code Interpreter tool call. */
        input?: string
        /** @description The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type. */
        outputs?: (
          | components['schemas']['RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject']
          | components['schemas']['RunStepDeltaStepDetailsToolCallsCodeOutputImageObject']
        )[]
      }
    }
    /** Code interpreter image output */
    RunStepDeltaStepDetailsToolCallsCodeOutputImageObject: {
      /** @description The index of the output in the outputs array. */
      index: number
      /**
       * @description Always `image`.
       * @enum {string}
       */
      type: 'image'
      image?: {
        /** @description The [file](/docs/api-reference/files) ID of the image. */
        file_id?: string
      }
    }
    /**
     * Code interpreter log output
     * @description Text output from the Code Interpreter tool call as part of a run step.
     */
    RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject: {
      /** @description The index of the output in the outputs array. */
      index: number
      /**
       * @description Always `logs`.
       * @enum {string}
       */
      type: 'logs'
      /** @description The text output from the Code Interpreter tool call. */
      logs?: string
    }
    /** File search tool call */
    RunStepDeltaStepDetailsToolCallsFileSearchObject: {
      /** @description The index of the tool call in the tool calls array. */
      index: number
      /** @description The ID of the tool call object. */
      id?: string
      /**
       * @description The type of tool call. This is always going to be `file_search` for this type of tool call.
       * @enum {string}
       */
      type: 'file_search'
      /** @description For now, this is always going to be an empty object. */
      file_search: Record<string, never>
    }
    /** Function tool call */
    RunStepDeltaStepDetailsToolCallsFunctionObject: {
      /** @description The index of the tool call in the tool calls array. */
      index: number
      /** @description The ID of the tool call object. */
      id?: string
      /**
       * @description The type of tool call. This is always going to be `function` for this type of tool call.
       * @enum {string}
       */
      type: 'function'
      /** @description The definition of the function that was called. */
      function?: {
        /** @description The name of the function. */
        name?: string
        /** @description The arguments passed to the function. */
        arguments?: string
        /** @description The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet. */
        output?: string | null
      }
    }
    /**
     * Tool calls
     * @description Details of the tool call.
     */
    RunStepDeltaStepDetailsToolCallsObject: {
      /**
       * @description Always `tool_calls`.
       * @enum {string}
       */
      type: 'tool_calls'
      /** @description An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.
       *      */
      tool_calls?: (
        | components['schemas']['RunStepDeltaStepDetailsToolCallsCodeObject']
        | components['schemas']['RunStepDeltaStepDetailsToolCallsFileSearchObject']
        | components['schemas']['RunStepDeltaStepDetailsToolCallsFunctionObject']
      )[]
    }
    /**
     * Message creation
     * @description Details of the message creation by the run step.
     */
    RunStepDetailsMessageCreationObject: {
      /**
       * @description Always `message_creation`.
       * @enum {string}
       */
      type: 'message_creation'
      message_creation: {
        /** @description The ID of the message that was created by this run step. */
        message_id: string
      }
    }
    /**
     * Code Interpreter tool call
     * @description Details of the Code Interpreter tool call the run step was involved in.
     */
    RunStepDetailsToolCallsCodeObject: {
      /** @description The ID of the tool call. */
      id: string
      /**
       * @description The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
       * @enum {string}
       */
      type: 'code_interpreter'
      /** @description The Code Interpreter tool call definition. */
      code_interpreter: {
        /** @description The input to the Code Interpreter tool call. */
        input: string
        /** @description The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type. */
        outputs: (
          | components['schemas']['RunStepDetailsToolCallsCodeOutputLogsObject']
          | components['schemas']['RunStepDetailsToolCallsCodeOutputImageObject']
        )[]
      }
    }
    /** Code Interpreter image output */
    RunStepDetailsToolCallsCodeOutputImageObject: {
      /**
       * @description Always `image`.
       * @enum {string}
       */
      type: 'image'
      image: {
        /** @description The [file](/docs/api-reference/files) ID of the image. */
        file_id: string
      }
    }
    /**
     * Code Interpreter log output
     * @description Text output from the Code Interpreter tool call as part of a run step.
     */
    RunStepDetailsToolCallsCodeOutputLogsObject: {
      /**
       * @description Always `logs`.
       * @enum {string}
       */
      type: 'logs'
      /** @description The text output from the Code Interpreter tool call. */
      logs: string
    }
    /** File search tool call */
    RunStepDetailsToolCallsFileSearchObject: {
      /** @description The ID of the tool call object. */
      id: string
      /**
       * @description The type of tool call. This is always going to be `file_search` for this type of tool call.
       * @enum {string}
       */
      type: 'file_search'
      /** @description For now, this is always going to be an empty object. */
      file_search: {
        ranking_options?: components['schemas']['RunStepDetailsToolCallsFileSearchRankingOptionsObject']
        /** @description The results of the file search. */
        results?: components['schemas']['RunStepDetailsToolCallsFileSearchResultObject'][]
      }
    }
    /**
     * File search tool call ranking options
     * @description The ranking options for the file search.
     */
    RunStepDetailsToolCallsFileSearchRankingOptionsObject: {
      ranker: components['schemas']['FileSearchRanker']
      /** @description The score threshold for the file search. All values must be a floating point number between 0 and 1. */
      score_threshold: number
    }
    /**
     * File search tool call result
     * @description A result instance of the file search.
     */
    RunStepDetailsToolCallsFileSearchResultObject: {
      /** @description The ID of the file that result was found in. */
      file_id: string
      /** @description The name of the file that result was found in. */
      file_name: string
      /** @description The score of the result. All values must be a floating point number between 0 and 1. */
      score: number
      /** @description The content of the result that was found. The content is only included if requested via the include query parameter. */
      content?: {
        /**
         * @description The type of the content.
         * @enum {string}
         */
        type?: 'text'
        /** @description The text content of the file. */
        text?: string
      }[]
    }
    /** Function tool call */
    RunStepDetailsToolCallsFunctionObject: {
      /** @description The ID of the tool call object. */
      id: string
      /**
       * @description The type of tool call. This is always going to be `function` for this type of tool call.
       * @enum {string}
       */
      type: 'function'
      /** @description The definition of the function that was called. */
      function: {
        /** @description The name of the function. */
        name: string
        /** @description The arguments passed to the function. */
        arguments: string
        /** @description The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet. */
        output: string | null
      }
    }
    /**
     * Tool calls
     * @description Details of the tool call.
     */
    RunStepDetailsToolCallsObject: {
      /**
       * @description Always `tool_calls`.
       * @enum {string}
       */
      type: 'tool_calls'
      /** @description An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.
       *      */
      tool_calls: (
        | components['schemas']['RunStepDetailsToolCallsCodeObject']
        | components['schemas']['RunStepDetailsToolCallsFileSearchObject']
        | components['schemas']['RunStepDetailsToolCallsFunctionObject']
      )[]
    }
    /**
     * Run steps
     * @description Represents a step in execution of a run.
     *
     */
    RunStepObject: {
      /** @description The identifier of the run step, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `thread.run.step`.
       * @enum {string}
       */
      object: 'thread.run.step'
      /** @description The Unix timestamp (in seconds) for when the run step was created. */
      created_at: number
      /** @description The ID of the [assistant](/docs/api-reference/assistants) associated with the run step. */
      assistant_id: string
      /** @description The ID of the [thread](/docs/api-reference/threads) that was run. */
      thread_id: string
      /** @description The ID of the [run](/docs/api-reference/runs) that this run step is a part of. */
      run_id: string
      /**
       * @description The type of run step, which can be either `message_creation` or `tool_calls`.
       * @enum {string}
       */
      type: 'message_creation' | 'tool_calls'
      /**
       * @description The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`.
       * @enum {string}
       */
      status: 'in_progress' | 'cancelled' | 'failed' | 'completed' | 'expired'
      /** @description The details of the run step. */
      step_details:
        | components['schemas']['RunStepDetailsMessageCreationObject']
        | components['schemas']['RunStepDetailsToolCallsObject']
      /** @description The last error associated with this run step. Will be `null` if there are no errors. */
      last_error: {
        /**
         * @description One of `server_error` or `rate_limit_exceeded`.
         * @enum {string}
         */
        code: 'server_error' | 'rate_limit_exceeded'
        /** @description A human-readable description of the error. */
        message: string
      } | null
      /** @description The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired. */
      expired_at: number | null
      /** @description The Unix timestamp (in seconds) for when the run step was cancelled. */
      cancelled_at: number | null
      /** @description The Unix timestamp (in seconds) for when the run step failed. */
      failed_at: number | null
      /** @description The Unix timestamp (in seconds) for when the run step completed. */
      completed_at: number | null
      metadata: components['schemas']['Metadata']
      usage: components['schemas']['RunStepCompletionUsage']
    }
    RunStepStreamEvent:
      | {
          /** @enum {string} */
          event: 'thread.run.step.created'
          data: components['schemas']['RunStepObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.step.in_progress'
          data: components['schemas']['RunStepObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.step.delta'
          data: components['schemas']['RunStepDeltaObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.step.completed'
          data: components['schemas']['RunStepObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.step.failed'
          data: components['schemas']['RunStepObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.step.cancelled'
          data: components['schemas']['RunStepObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.step.expired'
          data: components['schemas']['RunStepObject']
        }
    RunStreamEvent:
      | {
          /** @enum {string} */
          event: 'thread.run.created'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.queued'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.in_progress'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.requires_action'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.completed'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.incomplete'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.failed'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.cancelling'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.cancelled'
          data: components['schemas']['RunObject']
        }
      | {
          /** @enum {string} */
          event: 'thread.run.expired'
          data: components['schemas']['RunObject']
        }
    /** @description Tool call objects */
    RunToolCallObject: {
      /** @description The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint. */
      id: string
      /**
       * @description The type of tool call the output is required for. For now, this is always `function`.
       * @enum {string}
       */
      type: 'function'
      /** @description The function definition. */
      function: {
        /** @description The name of the function. */
        name: string
        /** @description The arguments that the model expects you to pass to the function. */
        arguments: string
      }
    }
    /**
     * Screenshot
     * @description A screenshot action.
     *
     */
    Screenshot: {
      /**
       * @description Specifies the event type. For a screenshot action, this property is
       *     always set to `screenshot`.
       *
       * @default screenshot
       * @enum {string}
       */
      type: 'screenshot'
    }
    /**
     * Scroll
     * @description A scroll action.
     *
     */
    Scroll: {
      /**
       * @description Specifies the event type. For a scroll action, this property is
       *     always set to `scroll`.
       *
       * @default scroll
       * @enum {string}
       */
      type: 'scroll'
      /** @description The x-coordinate where the scroll occurred.
       *      */
      x: number
      /** @description The y-coordinate where the scroll occurred.
       *      */
      y: number
      /** @description The horizontal scroll distance.
       *      */
      scroll_x: number
      /** @description The vertical scroll distance.
       *      */
      scroll_y: number
    }
    StaticChunkingStrategy: {
      /** @description The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
      max_chunk_size_tokens: number
      /** @description The number of tokens that overlap between chunks. The default value is `400`.
       *
       *     Note that the overlap must not exceed half of `max_chunk_size_tokens`.
       *      */
      chunk_overlap_tokens: number
    }
    /**
     * Static Chunking Strategy
     * @description Customize your own chunking strategy by setting chunk size and chunk overlap.
     */
    StaticChunkingStrategyRequestParam: {
      /**
       * @description Always `static`.
       * @enum {string}
       */
      type: 'static'
      static: components['schemas']['StaticChunkingStrategy']
    }
    /** Static Chunking Strategy */
    StaticChunkingStrategyResponseParam: {
      /**
       * @description Always `static`.
       * @enum {string}
       */
      type: 'static'
      static: components['schemas']['StaticChunkingStrategy']
    }
    /**
     * @description Up to 4 sequences where the API will stop generating further tokens. The
     *     returned text will not contain the stop sequence.
     *
     * @default null
     */
    StopConfiguration: (string | string[]) | null
    SubmitToolOutputsRunRequest: {
      /** @description A list of tools for which the outputs are being submitted. */
      tool_outputs: {
        /** @description The ID of the tool call in the `required_action` object within the run object the output is being submitted for. */
        tool_call_id?: string
        /** @description The output of the tool call to be submitted to continue the run. */
        output?: string
      }[]
      /** @description If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
       *      */
      stream?: boolean | null
    }
    /** @description An object specifying the format that the model must output.
     *
     *     Configuring `{ "type": "json_schema" }` enables Structured Outputs,
     *     which ensures the model will match your supplied JSON schema. Learn more in the
     *     [Structured Outputs guide](/docs/guides/structured-outputs).
     *
     *     The default format is `{ "type": "text" }` with no additional options.
     *
     *     **Not recommended for gpt-4o and newer models:**
     *
     *     Setting to `{ "type": "json_object" }` enables the older JSON mode, which
     *     ensures the message the model generates is valid JSON. Using `json_schema`
     *     is preferred for models that support it.
     *      */
    TextResponseFormatConfiguration:
      | components['schemas']['ResponseFormatText']
      | components['schemas']['TextResponseFormatJsonSchema']
      | components['schemas']['ResponseFormatJsonObject']
    /**
     * JSON schema
     * @description JSON Schema response format. Used to generate structured JSON responses.
     *     Learn more about [Structured Outputs](/docs/guides/structured-outputs).
     *
     */
    TextResponseFormatJsonSchema: {
      /**
       * @description The type of response format being defined. Always `json_schema`.
       * @enum {string}
       */
      type: 'json_schema'
      /** @description A description of what the response format is for, used by the model to
       *     determine how to respond in the format.
       *      */
      description?: string
      /** @description The name of the response format. Must be a-z, A-Z, 0-9, or contain
       *     underscores and dashes, with a maximum length of 64.
       *      */
      name?: string
      schema: components['schemas']['ResponseFormatJsonSchemaSchema']
      /**
       * @description Whether to enable strict schema adherence when generating the output.
       *     If set to true, the model will always follow the exact schema defined
       *     in the `schema` field. Only a subset of JSON Schema is supported when
       *     `strict` is `true`. To learn more, read the [Structured Outputs
       *     guide](/docs/guides/structured-outputs).
       *
       * @default false
       */
      strict: boolean | null
    }
    /**
     * Thread
     * @description Represents a thread that contains [messages](/docs/api-reference/messages).
     */
    ThreadObject: {
      /** @description The identifier, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `thread`.
       * @enum {string}
       */
      object: 'thread'
      /** @description The Unix timestamp (in seconds) for when the thread was created. */
      created_at: number
      /** @description A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
       *      */
      tool_resources: {
        code_interpreter?: {
          /**
           * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
           *
           * @default []
           */
          file_ids: string[]
        }
        file_search?: {
          /** @description The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
           *      */
          vector_store_ids?: string[]
        }
      } | null
      metadata: components['schemas']['Metadata']
    }
    ThreadStreamEvent: {
      /** @description Whether to enable input audio transcription. */
      enabled?: boolean
      /** @enum {string} */
      event: 'thread.created'
      data: components['schemas']['ThreadObject']
    }
    Tool:
      | components['schemas']['FileSearchTool']
      | components['schemas']['FunctionTool']
      | components['schemas']['ComputerTool']
      | components['schemas']['WebSearchTool']
    /**
     * Function tool
     * @description Use this option to force the model to call a specific function.
     *
     */
    ToolChoiceFunction: {
      /**
       * @description For function calling, the type is always `function`.
       * @enum {string}
       */
      type: 'function'
      /** @description The name of the function to call. */
      name: string
    }
    /**
     * Tool choice mode
     * @description Controls which (if any) tool is called by the model.
     *
     *     `none` means the model will not call any tool and instead generates a message.
     *
     *     `auto` means the model can pick between generating a message or calling one or
     *     more tools.
     *
     *     `required` means the model must call one or more tools.
     *
     * @enum {string}
     */
    ToolChoiceOptions: 'none' | 'auto' | 'required'
    /**
     * Hosted tool
     * @description Indicates that the model should use a built-in tool to generate a response.
     *     [Learn more about built-in tools](/docs/guides/tools).
     *
     */
    ToolChoiceTypes: {
      /**
       * @description The type of hosted tool the model should to use. Learn more about
       *     [built-in tools](/docs/guides/tools).
       *
       *     Allowed values are:
       *     - `file_search`
       *     - `web_search_preview`
       *     - `computer_use_preview`
       *
       * @enum {string}
       */
      type:
        | 'file_search'
        | 'web_search_preview'
        | 'computer_use_preview'
        | 'web_search_preview_2025_03_11'
    }
    /** @description Emitted when there is an additional text delta. This is also the first event emitted when the transcription starts. Only emitted when you [create a transcription](/docs/api-reference/audio/create-transcription) with the `Stream` parameter set to `true`. */
    TranscriptTextDeltaEvent: {
      /**
       * @description The type of the event. Always `transcript.text.delta`.
       *
       * @enum {string}
       */
      type: 'transcript.text.delta'
      /** @description The text delta that was additionally transcribed.
       *      */
      delta: string
      /** @description The log probabilities of the delta. Only included if you [create a transcription](/docs/api-reference/audio/create-transcription) with the `include[]` parameter set to `logprobs`.
       *      */
      logprobs?: components['schemas']['LogProbProperties'][]
    }
    /** @description Emitted when the transcription is complete. Contains the complete transcription text. Only emitted when you [create a transcription](/docs/api-reference/audio/create-transcription) with the `Stream` parameter set to `true`. */
    TranscriptTextDoneEvent: {
      /**
       * @description The type of the event. Always `transcript.text.done`.
       *
       * @enum {string}
       */
      type: 'transcript.text.done'
      /** @description The text that was transcribed.
       *      */
      text: string
      /** @description The log probabilities of the individual tokens in the transcription. Only included if you [create a transcription](/docs/api-reference/audio/create-transcription) with the `include[]` parameter set to `logprobs`.
       *      */
      logprobs?: components['schemas']['LogProbProperties'][]
    }
    /**
     * @default []
     * @enum {string}
     */
    TranscriptionInclude: 'logprobs'
    TranscriptionSegment: {
      /** @description Unique identifier of the segment. */
      id: number
      /** @description Seek offset of the segment. */
      seek: number
      /**
       * Format: float
       * @description Start time of the segment in seconds.
       */
      start: number
      /**
       * Format: float
       * @description End time of the segment in seconds.
       */
      end: number
      /** @description Text content of the segment. */
      text: string
      /** @description Array of token IDs for the text content. */
      tokens: number[]
      /**
       * Format: float
       * @description Temperature parameter used for generating the segment.
       */
      temperature: number
      /**
       * Format: float
       * @description Average logprob of the segment. If the value is lower than -1, consider the logprobs failed.
       */
      avg_logprob: number
      /**
       * Format: float
       * @description Compression ratio of the segment. If the value is greater than 2.4, consider the compression failed.
       */
      compression_ratio: number
      /**
       * Format: float
       * @description Probability of no speech in the segment. If the value is higher than 1.0 and the `avg_logprob` is below -1, consider this segment silent.
       */
      no_speech_prob: number
    }
    TranscriptionWord: {
      /** @description The text content of the word. */
      word: string
      /**
       * Format: float
       * @description Start time of the word in seconds.
       */
      start: number
      /**
       * Format: float
       * @description End time of the word in seconds.
       */
      end: number
    }
    /**
     * Thread Truncation Controls
     * @description Controls for how a thread will be truncated prior to the run. Use this to control the intial context window of the run.
     */
    TruncationObject: {
      /**
       * @description The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will be truncated to the n most recent messages in the thread. When set to `auto`, messages in the middle of the thread will be dropped to fit the context length of the model, `max_prompt_tokens`.
       * @enum {string}
       */
      type: 'auto' | 'last_messages'
      /** @description The number of most recent messages from the thread when constructing the context for the run. */
      last_messages?: number | null
    }
    /**
     * Type
     * @description An action to type in text.
     *
     */
    Type: {
      /**
       * @description Specifies the event type. For a type action, this property is
       *     always set to `type`.
       *
       * @default type
       * @enum {string}
       */
      type: 'type'
      /** @description The text to type.
       *      */
      text: string
    }
    UpdateVectorStoreFileAttributesRequest: {
      attributes: components['schemas']['VectorStoreFileAttributes']
    }
    UpdateVectorStoreRequest: {
      /** @description The name of the vector store. */
      name?: string | null
      expires_after?: components['schemas']['VectorStoreExpirationAfter'] &
        unknown
      metadata?: components['schemas']['Metadata']
    }
    /**
     * Upload
     * @description The Upload object can accept byte chunks in the form of Parts.
     *
     */
    Upload: {
      /** @description The Upload unique identifier, which can be referenced in API endpoints. */
      id: string
      /** @description The Unix timestamp (in seconds) for when the Upload was created. */
      created_at: number
      /** @description The name of the file to be uploaded. */
      filename: string
      /** @description The intended number of bytes to be uploaded. */
      bytes: number
      /** @description The intended purpose of the file. [Please refer here](/docs/api-reference/files/object#files/object-purpose) for acceptable values. */
      purpose: string
      /**
       * @description The status of the Upload.
       * @enum {string}
       */
      status: 'pending' | 'completed' | 'cancelled' | 'expired'
      /** @description The Unix timestamp (in seconds) for when the Upload will expire. */
      expires_at: number
      /**
       * @description The object type, which is always "upload".
       * @enum {string}
       */
      object?: 'upload'
      file?: components['schemas']['OpenAIFile'] & unknown
    }
    /**
     * UploadPart
     * @description The upload Part represents a chunk of bytes we can add to an Upload object.
     *
     */
    UploadPart: {
      /** @description The upload Part unique identifier, which can be referenced in API endpoints. */
      id: string
      /** @description The Unix timestamp (in seconds) for when the Part was created. */
      created_at: number
      /** @description The ID of the Upload object that this Part was added to. */
      upload_id: string
      /**
       * @description The object type, which is always `upload.part`.
       * @enum {string}
       */
      object: 'upload.part'
    }
    /**
     * URL citation
     * @description A citation for a web resource used to generate a model response.
     *
     */
    UrlCitation: {
      /** @description The URL of the web resource.
       *      */
      url: string
      /** @description The title of the web resource.
       *      */
      title: string
      /**
       * @description The type of the URL citation. Always `url_citation`.
       *
       * @enum {string}
       */
      type: 'url_citation'
      /** @description The index of the first character of the URL citation in the message.
       *      */
      start_index: number
      /** @description The index of the last character of the URL citation in the message.
       *      */
      end_index: number
    }
    /** @description The aggregated audio speeches usage details of the specific time bucket. */
    UsageAudioSpeechesResult: {
      /** @enum {string} */
      object: 'organization.usage.audio_speeches.result'
      /** @description The number of characters processed. */
      characters: number
      /** @description The count of requests made to the model. */
      num_model_requests: number
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
      project_id?: string | null
      /** @description When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
      user_id?: string | null
      /** @description When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
      api_key_id?: string | null
      /** @description When `group_by=model`, this field provides the model name of the grouped usage result. */
      model?: string | null
    }
    /** @description The aggregated audio transcriptions usage details of the specific time bucket. */
    UsageAudioTranscriptionsResult: {
      /** @enum {string} */
      object: 'organization.usage.audio_transcriptions.result'
      /** @description The number of seconds processed. */
      seconds: number
      /** @description The count of requests made to the model. */
      num_model_requests: number
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
      project_id?: string | null
      /** @description When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
      user_id?: string | null
      /** @description When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
      api_key_id?: string | null
      /** @description When `group_by=model`, this field provides the model name of the grouped usage result. */
      model?: string | null
    }
    /** @description The aggregated code interpreter sessions usage details of the specific time bucket. */
    UsageCodeInterpreterSessionsResult: {
      /** @enum {string} */
      object: 'organization.usage.code_interpreter_sessions.result'
      /** @description The number of code interpreter sessions. */
      num_sessions?: number
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
      project_id?: string | null
    }
    /** @description The aggregated completions usage details of the specific time bucket. */
    UsageCompletionsResult: {
      /** @enum {string} */
      object: 'organization.usage.completions.result'
      /** @description The aggregated number of text input tokens used, including cached tokens. For customers subscribe to scale tier, this includes scale tier tokens. */
      input_tokens: number
      /** @description The aggregated number of text input tokens that has been cached from previous requests. For customers subscribe to scale tier, this includes scale tier tokens. */
      input_cached_tokens?: number
      /** @description The aggregated number of text output tokens used. For customers subscribe to scale tier, this includes scale tier tokens. */
      output_tokens: number
      /** @description The aggregated number of audio input tokens used, including cached tokens. */
      input_audio_tokens?: number
      /** @description The aggregated number of audio output tokens used. */
      output_audio_tokens?: number
      /** @description The count of requests made to the model. */
      num_model_requests: number
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
      project_id?: string | null
      /** @description When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
      user_id?: string | null
      /** @description When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
      api_key_id?: string | null
      /** @description When `group_by=model`, this field provides the model name of the grouped usage result. */
      model?: string | null
      /** @description When `group_by=batch`, this field tells whether the grouped usage result is batch or not. */
      batch?: boolean | null
    }
    /** @description The aggregated embeddings usage details of the specific time bucket. */
    UsageEmbeddingsResult: {
      /** @enum {string} */
      object: 'organization.usage.embeddings.result'
      /** @description The aggregated number of input tokens used. */
      input_tokens: number
      /** @description The count of requests made to the model. */
      num_model_requests: number
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
      project_id?: string | null
      /** @description When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
      user_id?: string | null
      /** @description When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
      api_key_id?: string | null
      /** @description When `group_by=model`, this field provides the model name of the grouped usage result. */
      model?: string | null
    }
    /** @description The aggregated images usage details of the specific time bucket. */
    UsageImagesResult: {
      /** @enum {string} */
      object: 'organization.usage.images.result'
      /** @description The number of images processed. */
      images: number
      /** @description The count of requests made to the model. */
      num_model_requests: number
      /** @description When `group_by=source`, this field provides the source of the grouped usage result, possible values are `image.generation`, `image.edit`, `image.variation`. */
      source?: string | null
      /** @description When `group_by=size`, this field provides the image size of the grouped usage result. */
      size?: string | null
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
      project_id?: string | null
      /** @description When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
      user_id?: string | null
      /** @description When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
      api_key_id?: string | null
      /** @description When `group_by=model`, this field provides the model name of the grouped usage result. */
      model?: string | null
    }
    /** @description The aggregated moderations usage details of the specific time bucket. */
    UsageModerationsResult: {
      /** @enum {string} */
      object: 'organization.usage.moderations.result'
      /** @description The aggregated number of input tokens used. */
      input_tokens: number
      /** @description The count of requests made to the model. */
      num_model_requests: number
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
      project_id?: string | null
      /** @description When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
      user_id?: string | null
      /** @description When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
      api_key_id?: string | null
      /** @description When `group_by=model`, this field provides the model name of the grouped usage result. */
      model?: string | null
    }
    UsageResponse: {
      /** @enum {string} */
      object: 'page'
      data: components['schemas']['UsageTimeBucket'][]
      has_more: boolean
      next_page: string
    }
    UsageTimeBucket: {
      /** @enum {string} */
      object: 'bucket'
      start_time: number
      end_time: number
      result: (
        | components['schemas']['UsageCompletionsResult']
        | components['schemas']['UsageEmbeddingsResult']
        | components['schemas']['UsageModerationsResult']
        | components['schemas']['UsageImagesResult']
        | components['schemas']['UsageAudioSpeechesResult']
        | components['schemas']['UsageAudioTranscriptionsResult']
        | components['schemas']['UsageVectorStoresResult']
        | components['schemas']['UsageCodeInterpreterSessionsResult']
        | components['schemas']['CostsResult']
      )[]
    }
    /** @description The aggregated vector stores usage details of the specific time bucket. */
    UsageVectorStoresResult: {
      /** @enum {string} */
      object: 'organization.usage.vector_stores.result'
      /** @description The vector stores usage in bytes. */
      usage_bytes: number
      /** @description When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
      project_id?: string | null
    }
    /** @description Represents an individual `user` within an organization. */
    User: {
      /**
       * @description The object type, which is always `organization.user`
       * @enum {string}
       */
      object: 'organization.user'
      /** @description The identifier, which can be referenced in API endpoints */
      id: string
      /** @description The name of the user */
      name: string
      /** @description The email address of the user */
      email: string
      /**
       * @description `owner` or `reader`
       * @enum {string}
       */
      role: 'owner' | 'reader'
      /** @description The Unix timestamp (in seconds) of when the user was added. */
      added_at: number
    }
    UserDeleteResponse: {
      /** @enum {string} */
      object: 'organization.user.deleted'
      id: string
      deleted: boolean
    }
    UserListResponse: {
      /** @enum {string} */
      object: 'list'
      data: components['schemas']['User'][]
      first_id: string
      last_id: string
      has_more: boolean
    }
    UserRoleUpdateRequest: {
      /**
       * @description `owner` or `reader`
       * @enum {string}
       */
      role: 'owner' | 'reader'
    }
    /**
     * Vector store expiration policy
     * @description The expiration policy for a vector store.
     */
    VectorStoreExpirationAfter: {
      /**
       * @description Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
       * @enum {string}
       */
      anchor: 'last_active_at'
      /** @description The number of days after the anchor time that the vector store will expire. */
      days: number
    }
    /** @description Set of 16 key-value pairs that can be attached to an object. This can be
     *     useful for storing additional information about the object in a structured
     *     format, and querying for objects via API or the dashboard. Keys are strings
     *     with a maximum length of 64 characters. Values are strings with a maximum
     *     length of 512 characters, booleans, or numbers.
     *      */
    VectorStoreFileAttributes: {
      [key: string]: string | number | boolean
    } | null
    /**
     * Vector store file batch
     * @description A batch of files attached to a vector store.
     */
    VectorStoreFileBatchObject: {
      /** @description The identifier, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `vector_store.file_batch`.
       * @enum {string}
       */
      object: 'vector_store.files_batch'
      /** @description The Unix timestamp (in seconds) for when the vector store files batch was created. */
      created_at: number
      /** @description The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
      vector_store_id: string
      /**
       * @description The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`.
       * @enum {string}
       */
      status: 'in_progress' | 'completed' | 'cancelled' | 'failed'
      file_counts: {
        /** @description The number of files that are currently being processed. */
        in_progress: number
        /** @description The number of files that have been processed. */
        completed: number
        /** @description The number of files that have failed to process. */
        failed: number
        /** @description The number of files that where cancelled. */
        cancelled: number
        /** @description The total number of files. */
        total: number
      }
    }
    /** @description Represents the parsed content of a vector store file. */
    VectorStoreFileContentResponse: {
      /**
       * @description The object type, which is always `vector_store.file_content.page`
       * @enum {string}
       */
      object: 'vector_store.file_content.page'
      /** @description Parsed content of the file. */
      data: {
        /** @description The content type (currently only `"text"`) */
        type?: string
        /** @description The text content */
        text?: string
      }[]
      /** @description Indicates if there are more content pages to fetch. */
      has_more: boolean
      /** @description The token for the next page, if any. */
      next_page: string | null
    }
    /**
     * Vector store files
     * @description A list of files attached to a vector store.
     */
    VectorStoreFileObject: {
      /** @description The identifier, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `vector_store.file`.
       * @enum {string}
       */
      object: 'vector_store.file'
      /** @description The total vector store usage in bytes. Note that this may be different from the original file size. */
      usage_bytes: number
      /** @description The Unix timestamp (in seconds) for when the vector store file was created. */
      created_at: number
      /** @description The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
      vector_store_id: string
      /**
       * @description The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use.
       * @enum {string}
       */
      status: 'in_progress' | 'completed' | 'cancelled' | 'failed'
      /** @description The last error associated with this vector store file. Will be `null` if there are no errors. */
      last_error: {
        /**
         * @description One of `server_error` or `rate_limit_exceeded`.
         * @enum {string}
         */
        code: 'server_error' | 'unsupported_file' | 'invalid_file'
        /** @description A human-readable description of the error. */
        message: string
      } | null
      /** @description The strategy used to chunk the file. */
      chunking_strategy?:
        | components['schemas']['StaticChunkingStrategyResponseParam']
        | components['schemas']['OtherChunkingStrategyResponseParam']
      attributes?: components['schemas']['VectorStoreFileAttributes']
    }
    /**
     * Vector store
     * @description A vector store is a collection of processed files can be used by the `file_search` tool.
     */
    VectorStoreObject: {
      /** @description The identifier, which can be referenced in API endpoints. */
      id: string
      /**
       * @description The object type, which is always `vector_store`.
       * @enum {string}
       */
      object: 'vector_store'
      /** @description The Unix timestamp (in seconds) for when the vector store was created. */
      created_at: number
      /** @description The name of the vector store. */
      name: string
      /** @description The total number of bytes used by the files in the vector store. */
      usage_bytes: number
      file_counts: {
        /** @description The number of files that are currently being processed. */
        in_progress: number
        /** @description The number of files that have been successfully processed. */
        completed: number
        /** @description The number of files that have failed to process. */
        failed: number
        /** @description The number of files that were cancelled. */
        cancelled: number
        /** @description The total number of files. */
        total: number
      }
      /**
       * @description The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use.
       * @enum {string}
       */
      status: 'expired' | 'in_progress' | 'completed'
      expires_after?: components['schemas']['VectorStoreExpirationAfter']
      /** @description The Unix timestamp (in seconds) for when the vector store will expire. */
      expires_at?: number | null
      /** @description The Unix timestamp (in seconds) for when the vector store was last active. */
      last_active_at: number | null
      metadata: components['schemas']['Metadata']
    }
    VectorStoreSearchRequest: {
      /** @description A query string for a search */
      query: string | string[]
      /**
       * @description Whether to rewrite the natural language query for vector search.
       * @default false
       */
      rewrite_query: boolean
      /**
       * @description The maximum number of results to return. This number should be between 1 and 50 inclusive.
       * @default 10
       */
      max_num_results: number
      /** @description A filter to apply based on file attributes. */
      filters?:
        | components['schemas']['ComparisonFilter']
        | components['schemas']['CompoundFilter']
      /** @description Ranking options for search. */
      ranking_options?: {
        /**
         * @default auto
         * @enum {string}
         */
        ranker: 'auto' | 'default-2024-11-15'
        /** @default 0 */
        score_threshold: number
      }
    }
    VectorStoreSearchResultContentObject: {
      /**
       * @description The type of content.
       * @enum {string}
       */
      type: 'text'
      /** @description The text content returned from search. */
      text: string
    }
    VectorStoreSearchResultItem: {
      /** @description The ID of the vector store file. */
      file_id: string
      /** @description The name of the vector store file. */
      filename: string
      /** @description The similarity score for the result. */
      score: number
      attributes: components['schemas']['VectorStoreFileAttributes']
      /** @description Content chunks from the file. */
      content: components['schemas']['VectorStoreSearchResultContentObject'][]
    }
    VectorStoreSearchResultsPage: {
      /**
       * @description The object type, which is always `vector_store.search_results.page`
       * @enum {string}
       */
      object: 'vector_store.search_results.page'
      search_query: string[]
      /** @description The list of search result items. */
      data: components['schemas']['VectorStoreSearchResultItem'][]
      /** @description Indicates if there are more results to fetch. */
      has_more: boolean
      /** @description The token for the next page, if any. */
      next_page: string | null
    }
    /** @example ash */
    VoiceIdsShared:
      | string
      | (
          | 'alloy'
          | 'ash'
          | 'ballad'
          | 'coral'
          | 'echo'
          | 'fable'
          | 'onyx'
          | 'nova'
          | 'sage'
          | 'shimmer'
          | 'verse'
        )
    /**
     * Wait
     * @description A wait action.
     *
     */
    Wait: {
      /**
       * @description Specifies the event type. For a wait action, this property is
       *     always set to `wait`.
       *
       * @default wait
       * @enum {string}
       */
      type: 'wait'
    }
    /**
     * @description High level guidance for the amount of context window space to use for the
     *     search. One of `low`, `medium`, or `high`. `medium` is the default.
     *
     * @default medium
     * @enum {string}
     */
    WebSearchContextSize: 'low' | 'medium' | 'high'
    /**
     * Web search location
     * @description Approximate location parameters for the search.
     */
    WebSearchLocation: {
      /** @description The two-letter
       *     [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the user,
       *     e.g. `US`.
       *      */
      country?: string
      /** @description Free text input for the region of the user, e.g. `California`.
       *      */
      region?: string
      /** @description Free text input for the city of the user, e.g. `San Francisco`.
       *      */
      city?: string
      /** @description The [IANA timezone](https://timeapi.io/documentation/iana-timezones)
       *     of the user, e.g. `America/Los_Angeles`.
       *      */
      timezone?: string
    }
    /**
     * Web search
     * @description This tool searches the web for relevant results to use in a response.
     *     Learn more about the [web search tool](/docs/guides/tools-web-search).
     *
     */
    WebSearchTool: {
      /**
       * @description The type of the web search tool. One of:
       *     - `web_search_preview`
       *     - `web_search_preview_2025_03_11`
       *
       * @enum {string}
       */
      type: 'web_search_preview' | 'web_search_preview_2025_03_11'
      user_location?:
        | (components['schemas']['WebSearchLocation'] & {
            /**
             * @description The type of location approximation. Always `approximate`.
             *
             * @enum {string}
             */
            type: 'approximate'
          })
        | null
      search_context_size?: components['schemas']['WebSearchContextSize']
    }
    /**
     * Web search tool call
     * @description The results of a web search tool call. See the
     *     [web search guide](/docs/guides/tools-web-search) for more information.
     *
     */
    WebSearchToolCall: {
      /** @description The unique ID of the web search tool call.
       *      */
      id: string
      /**
       * @description The type of the web search tool call. Always `web_search_call`.
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      type: 'WebSearchToolCall'
      /**
       * @description The status of the web search tool call.
       *
       * @enum {string}
       */
      status: 'in_progress' | 'searching' | 'completed' | 'failed'
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  listAssistants: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListAssistantsResponse']
        }
      }
    }
  }
  createAssistant: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateAssistantRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AssistantObject']
        }
      }
    }
  }
  getAssistant: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the assistant to retrieve. */
        assistant_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AssistantObject']
        }
      }
    }
  }
  modifyAssistant: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the assistant to modify. */
        assistant_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ModifyAssistantRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AssistantObject']
        }
      }
    }
  }
  deleteAssistant: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the assistant to delete. */
        assistant_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeleteAssistantResponse']
        }
      }
    }
  }
  createSpeech: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateSpeechRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description chunked */
          'Transfer-Encoding'?: string
          [name: string]: unknown
        }
        content: {
          'application/octet-stream': string
        }
      }
    }
  }
  createTranscription: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['CreateTranscriptionRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json':
            | components['schemas']['CreateTranscriptionResponseJson']
            | components['schemas']['CreateTranscriptionResponseVerboseJson']
          'text/event-stream': components['schemas']['CreateTranscriptionResponseStreamEvent']
        }
      }
    }
  }
  createTranslation: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['CreateTranslationRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json':
            | components['schemas']['CreateTranslationResponseJson']
            | components['schemas']['CreateTranslationResponseVerboseJson']
        }
      }
    }
  }
  listBatches: {
    parameters: {
      query?: {
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Batch listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListBatchesResponse']
        }
      }
    }
  }
  createBatch: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID of an uploaded file that contains requests for the new batch.
           *
           *     See [upload file](/docs/api-reference/files/create) for how to upload a file.
           *
           *     Your input file must be formatted as a [JSONL file](/docs/api-reference/batch/request-input), and must be uploaded with the purpose `batch`. The file can contain up to 50,000 requests, and can be up to 200 MB in size.
           *      */
          input_file_id: string
          /**
           * @description The endpoint to be used for all requests in the batch. Currently `/v1/responses`, `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch.
           * @enum {string}
           */
          endpoint:
            | '/v1/responses'
            | '/v1/chat/completions'
            | '/v1/embeddings'
            | '/v1/completions'
          /**
           * @description The time frame within which the batch should be processed. Currently only `24h` is supported.
           * @enum {string}
           */
          completion_window: '24h'
          metadata?: components['schemas']['Metadata']
        }
      }
    }
    responses: {
      /** @description Batch created successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Batch']
        }
      }
    }
  }
  retrieveBatch: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the batch to retrieve. */
        batch_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Batch retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Batch']
        }
      }
    }
  }
  cancelBatch: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the batch to cancel. */
        batch_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Batch is cancelling. Returns the cancelling batch's details. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Batch']
        }
      }
    }
  }
  listChatCompletions: {
    parameters: {
      query?: {
        /** @description The model used to generate the Chat Completions. */
        model?: string
        /** @description A list of metadata keys to filter the Chat Completions by. Example:
         *
         *     `metadata[key1]=value1&metadata[key2]=value2`
         *      */
        metadata?: components['schemas']['Metadata']
        /** @description Identifier for the last chat completion from the previous pagination request. */
        after?: string
        /** @description Number of Chat Completions to retrieve. */
        limit?: number
        /** @description Sort order for Chat Completions by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. */
        order?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description A list of Chat Completions */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChatCompletionList']
        }
      }
    }
  }
  createChatCompletion: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateChatCompletionRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateChatCompletionResponse']
          'text/event-stream': components['schemas']['CreateChatCompletionStreamResponse']
        }
      }
    }
  }
  getChatCompletion: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the chat completion to retrieve. */
        completion_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description A chat completion */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateChatCompletionResponse']
        }
      }
    }
  }
  updateChatCompletion: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the chat completion to update. */
        completion_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          metadata: components['schemas']['Metadata']
        }
      }
    }
    responses: {
      /** @description A chat completion */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateChatCompletionResponse']
        }
      }
    }
  }
  deleteChatCompletion: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the chat completion to delete. */
        completion_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description The chat completion was deleted successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChatCompletionDeleted']
        }
      }
    }
  }
  getChatCompletionMessages: {
    parameters: {
      query?: {
        /** @description Identifier for the last message from the previous pagination request. */
        after?: string
        /** @description Number of messages to retrieve. */
        limit?: number
        /** @description Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. */
        order?: 'asc' | 'desc'
      }
      header?: never
      path: {
        /** @description The ID of the chat completion to retrieve messages from. */
        completion_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description A list of messages */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChatCompletionMessageList']
        }
      }
    }
  }
  createCompletion: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateCompletionRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateCompletionResponse']
        }
      }
    }
  }
  createEmbedding: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateEmbeddingRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateEmbeddingResponse']
        }
      }
    }
  }
  listFiles: {
    parameters: {
      query?: {
        /** @description Only return files with the given purpose. */
        purpose?: string
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.
         *      */
        limit?: number
        /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListFilesResponse']
        }
      }
    }
  }
  createFile: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['CreateFileRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenAIFile']
        }
      }
    }
  }
  retrieveFile: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the file to use for this request. */
        file_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenAIFile']
        }
      }
    }
  }
  deleteFile: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the file to use for this request. */
        file_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeleteFileResponse']
        }
      }
    }
  }
  downloadFile: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the file to use for this request. */
        file_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': string
        }
      }
    }
  }
  listFineTuningCheckpointPermissions: {
    parameters: {
      query?: {
        /** @description The ID of the project to get permissions for. */
        project_id?: string
        /** @description Identifier for the last permission ID from the previous pagination request. */
        after?: string
        /** @description Number of permissions to retrieve. */
        limit?: number
        /** @description The order in which to retrieve permissions. */
        order?: 'ascending' | 'descending'
      }
      header?: never
      path: {
        /** @description The ID of the fine-tuned model checkpoint to get permissions for.
         *      */
        permission_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListFineTuningCheckpointPermissionResponse']
        }
      }
    }
  }
  createFineTuningCheckpointPermission: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the fine-tuned model checkpoint to create a permission for.
         *      */
        permission_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateFineTuningCheckpointPermissionRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListFineTuningCheckpointPermissionResponse']
        }
      }
    }
  }
  deleteFineTuningCheckpointPermission: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the fine-tuned model checkpoint permission to delete.
         *      */
        permission_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeleteFineTuningCheckpointPermissionResponse']
        }
      }
    }
  }
  listPaginatedFineTuningJobs: {
    parameters: {
      query?: {
        /** @description Identifier for the last job from the previous pagination request. */
        after?: string
        /** @description Number of fine-tuning jobs to retrieve. */
        limit?: number
        /** @description Optional metadata filter. To filter, use the syntax `metadata[k]=v`. Alternatively, set `metadata=null` to indicate no metadata.
         *      */
        metadata?: {
          [key: string]: string
        } | null
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListPaginatedFineTuningJobsResponse']
        }
      }
    }
  }
  createFineTuningJob: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateFineTuningJobRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FineTuningJob']
        }
      }
    }
  }
  retrieveFineTuningJob: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the fine-tuning job.
         *      */
        fine_tuning_job_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FineTuningJob']
        }
      }
    }
  }
  cancelFineTuningJob: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the fine-tuning job to cancel.
         *      */
        fine_tuning_job_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FineTuningJob']
        }
      }
    }
  }
  listFineTuningJobCheckpoints: {
    parameters: {
      query?: {
        /** @description Identifier for the last checkpoint ID from the previous pagination request. */
        after?: string
        /** @description Number of checkpoints to retrieve. */
        limit?: number
      }
      header?: never
      path: {
        /** @description The ID of the fine-tuning job to get checkpoints for.
         *      */
        fine_tuning_job_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListFineTuningJobCheckpointsResponse']
        }
      }
    }
  }
  listFineTuningEvents: {
    parameters: {
      query?: {
        /** @description Identifier for the last event from the previous pagination request. */
        after?: string
        /** @description Number of events to retrieve. */
        limit?: number
      }
      header?: never
      path: {
        /** @description The ID of the fine-tuning job to get events for.
         *      */
        fine_tuning_job_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListFineTuningJobEventsResponse']
        }
      }
    }
  }
  createImageEdit: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['CreateImageEditRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ImagesResponse']
        }
      }
    }
  }
  createImage: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateImageRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ImagesResponse']
        }
      }
    }
  }
  createImageVariation: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['CreateImageVariationRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ImagesResponse']
        }
      }
    }
  }
  listModels: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListModelsResponse']
        }
      }
    }
  }
  retrieveModel: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the model to use for this request */
        model: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Model']
        }
      }
    }
  }
  deleteModel: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The model to delete */
        model: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeleteModelResponse']
        }
      }
    }
  }
  createModeration: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateModerationRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateModerationResponse']
        }
      }
    }
  }
  'admin-api-keys-list': {
    parameters: {
      query?: {
        after?: string | null
        order?: 'asc' | 'desc'
        limit?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description A list of organization API keys. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ApiKeyList']
        }
      }
    }
  }
  'admin-api-keys-create': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @example New Admin Key */
          name: string
        }
      }
    }
    responses: {
      /** @description The newly created admin API key. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AdminApiKey']
        }
      }
    }
  }
  'admin-api-keys-get': {
    parameters: {
      query?: never
      header?: never
      path: {
        key_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Details of the requested API key. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AdminApiKey']
        }
      }
    }
  }
  'admin-api-keys-delete': {
    parameters: {
      query?: never
      header?: never
      path: {
        key_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Confirmation that the API key was deleted. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @example key_abc */
            id?: string
            /** @example organization.admin_api_key.deleted */
            object?: string
            /** @example true */
            deleted?: boolean
          }
        }
      }
    }
  }
  'list-audit-logs': {
    parameters: {
      query?: {
        /** @description Return only events whose `effective_at` (Unix seconds) is in this range. */
        effective_at?: {
          /** @description Return only events whose `effective_at` (Unix seconds) is greater than this value. */
          gt?: number
          /** @description Return only events whose `effective_at` (Unix seconds) is greater than or equal to this value. */
          gte?: number
          /** @description Return only events whose `effective_at` (Unix seconds) is less than this value. */
          lt?: number
          /** @description Return only events whose `effective_at` (Unix seconds) is less than or equal to this value. */
          lte?: number
        }
        /** @description Return only events for these projects. */
        'project_ids[]'?: string[]
        /** @description Return only events with a `type` in one of these values. For example, `project.created`. For all options, see the documentation for the [audit log object](/docs/api-reference/audit-logs/object). */
        'event_types[]'?: components['schemas']['AuditLogEventType'][]
        /** @description Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID. */
        'actor_ids[]'?: string[]
        /** @description Return only events performed by users with these emails. */
        'actor_emails[]'?: string[]
        /** @description Return only events performed on these targets. For example, a project ID updated. */
        'resource_ids[]'?: string[]
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Audit logs listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListAuditLogsResponse']
        }
      }
    }
  }
  'usage-costs': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently only `1d` is supported, default to `1d`. */
        bucket_width?: '1d'
        /** @description Return only costs for these projects. */
        project_ids?: string[]
        /** @description Group the costs by the specified fields. Support fields include `project_id`, `line_item` and any combination of them. */
        group_by?: ('project_id' | 'line_item')[]
        /** @description A limit on the number of buckets to be returned. Limit can range between 1 and 180, and the default is 7.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Costs data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'list-invites': {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Invites listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['InviteListResponse']
        }
      }
    }
  }
  inviteUser: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description The invite request payload. */
    requestBody: {
      content: {
        'application/json': components['schemas']['InviteRequest']
      }
    }
    responses: {
      /** @description User invited successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Invite']
        }
      }
    }
  }
  'retrieve-invite': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the invite to retrieve. */
        invite_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Invite retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Invite']
        }
      }
    }
  }
  'delete-invite': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the invite to delete. */
        invite_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Invite deleted successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['InviteDeleteResponse']
        }
      }
    }
  }
  'list-projects': {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description If `true` returns all projects including those that have been `archived`. Archived projects are not included by default. */
        include_archived?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Projects listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectListResponse']
        }
      }
    }
  }
  'create-project': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description The project create request payload. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ProjectCreateRequest']
      }
    }
    responses: {
      /** @description Project created successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Project']
        }
      }
    }
  }
  'retrieve-project': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Project']
        }
      }
    }
  }
  'modify-project': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    /** @description The project update request payload. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ProjectUpdateRequest']
      }
    }
    responses: {
      /** @description Project updated successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Project']
        }
      }
      /** @description Error response when updating the default project. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'list-project-api-keys': {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
      }
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project API keys listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectApiKeyListResponse']
        }
      }
    }
  }
  'retrieve-project-api-key': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
        /** @description The ID of the API key. */
        key_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project API key retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectApiKey']
        }
      }
    }
  }
  'delete-project-api-key': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
        /** @description The ID of the API key. */
        key_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project API key deleted successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectApiKeyDeleteResponse']
        }
      }
      /** @description Error response for various conditions. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'archive-project': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project archived successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Project']
        }
      }
    }
  }
  'list-project-rate-limits': {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. The default is 100.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
      }
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project rate limits listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectRateLimitListResponse']
        }
      }
    }
  }
  'update-project-rate-limits': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
        /** @description The ID of the rate limit. */
        rate_limit_id: string
      }
      cookie?: never
    }
    /** @description The project rate limit update request payload. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ProjectRateLimitUpdateRequest']
      }
    }
    responses: {
      /** @description Project rate limit updated successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectRateLimit']
        }
      }
      /** @description Error response for various conditions. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'list-project-service-accounts': {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
      }
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project service accounts listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectServiceAccountListResponse']
        }
      }
      /** @description Error response when project is archived. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'create-project-service-account': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    /** @description The project service account create request payload. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ProjectServiceAccountCreateRequest']
      }
    }
    responses: {
      /** @description Project service account created successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectServiceAccountCreateResponse']
        }
      }
      /** @description Error response when project is archived. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'retrieve-project-service-account': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
        /** @description The ID of the service account. */
        service_account_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project service account retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectServiceAccount']
        }
      }
    }
  }
  'delete-project-service-account': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
        /** @description The ID of the service account. */
        service_account_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project service account deleted successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectServiceAccountDeleteResponse']
        }
      }
    }
  }
  'list-project-users': {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
      }
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project users listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectUserListResponse']
        }
      }
      /** @description Error response when project is archived. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'create-project-user': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
      }
      cookie?: never
    }
    /** @description The project user create request payload. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ProjectUserCreateRequest']
      }
    }
    responses: {
      /** @description User added to project successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectUser']
        }
      }
      /** @description Error response for various conditions. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'retrieve-project-user': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
        /** @description The ID of the user. */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project user retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectUser']
        }
      }
    }
  }
  'modify-project-user': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
        /** @description The ID of the user. */
        user_id: string
      }
      cookie?: never
    }
    /** @description The project user update request payload. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ProjectUserUpdateRequest']
      }
    }
    responses: {
      /** @description Project user's role updated successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectUser']
        }
      }
      /** @description Error response for various conditions. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'delete-project-user': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the project. */
        project_id: string
        /** @description The ID of the user. */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Project user deleted successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ProjectUserDeleteResponse']
        }
      }
      /** @description Error response for various conditions. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  'usage-audio-speeches': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
        bucket_width?: '1m' | '1h' | '1d'
        /** @description Return only usage for these projects. */
        project_ids?: string[]
        /** @description Return only usage for these users. */
        user_ids?: string[]
        /** @description Return only usage for these API keys. */
        api_key_ids?: string[]
        /** @description Return only usage for these models. */
        models?: string[]
        /** @description Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
        group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[]
        /** @description Specifies the number of buckets to return.
         *     - `bucket_width=1d`: default: 7, max: 31
         *     - `bucket_width=1h`: default: 24, max: 168
         *     - `bucket_width=1m`: default: 60, max: 1440
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Usage data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'usage-audio-transcriptions': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
        bucket_width?: '1m' | '1h' | '1d'
        /** @description Return only usage for these projects. */
        project_ids?: string[]
        /** @description Return only usage for these users. */
        user_ids?: string[]
        /** @description Return only usage for these API keys. */
        api_key_ids?: string[]
        /** @description Return only usage for these models. */
        models?: string[]
        /** @description Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
        group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[]
        /** @description Specifies the number of buckets to return.
         *     - `bucket_width=1d`: default: 7, max: 31
         *     - `bucket_width=1h`: default: 24, max: 168
         *     - `bucket_width=1m`: default: 60, max: 1440
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Usage data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'usage-code-interpreter-sessions': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
        bucket_width?: '1m' | '1h' | '1d'
        /** @description Return only usage for these projects. */
        project_ids?: string[]
        /** @description Group the usage data by the specified fields. Support fields include `project_id`. */
        group_by?: 'project_id'[]
        /** @description Specifies the number of buckets to return.
         *     - `bucket_width=1d`: default: 7, max: 31
         *     - `bucket_width=1h`: default: 24, max: 168
         *     - `bucket_width=1m`: default: 60, max: 1440
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Usage data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'usage-completions': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
        bucket_width?: '1m' | '1h' | '1d'
        /** @description Return only usage for these projects. */
        project_ids?: string[]
        /** @description Return only usage for these users. */
        user_ids?: string[]
        /** @description Return only usage for these API keys. */
        api_key_ids?: string[]
        /** @description Return only usage for these models. */
        models?: string[]
        /** @description If `true`, return batch jobs only. If `false`, return non-batch jobs only. By default, return both.
         *      */
        batch?: boolean
        /** @description Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `batch` or any combination of them. */
        group_by?: (
          | 'project_id'
          | 'user_id'
          | 'api_key_id'
          | 'model'
          | 'batch'
        )[]
        /** @description Specifies the number of buckets to return.
         *     - `bucket_width=1d`: default: 7, max: 31
         *     - `bucket_width=1h`: default: 24, max: 168
         *     - `bucket_width=1m`: default: 60, max: 1440
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Usage data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'usage-embeddings': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
        bucket_width?: '1m' | '1h' | '1d'
        /** @description Return only usage for these projects. */
        project_ids?: string[]
        /** @description Return only usage for these users. */
        user_ids?: string[]
        /** @description Return only usage for these API keys. */
        api_key_ids?: string[]
        /** @description Return only usage for these models. */
        models?: string[]
        /** @description Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
        group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[]
        /** @description Specifies the number of buckets to return.
         *     - `bucket_width=1d`: default: 7, max: 31
         *     - `bucket_width=1h`: default: 24, max: 168
         *     - `bucket_width=1m`: default: 60, max: 1440
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Usage data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'usage-images': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
        bucket_width?: '1m' | '1h' | '1d'
        /** @description Return only usages for these sources. Possible values are `image.generation`, `image.edit`, `image.variation` or any combination of them. */
        sources?: ('image.generation' | 'image.edit' | 'image.variation')[]
        /** @description Return only usages for these image sizes. Possible values are `256x256`, `512x512`, `1024x1024`, `1792x1792`, `1024x1792` or any combination of them. */
        sizes?: (
          | '256x256'
          | '512x512'
          | '1024x1024'
          | '1792x1792'
          | '1024x1792'
        )[]
        /** @description Return only usage for these projects. */
        project_ids?: string[]
        /** @description Return only usage for these users. */
        user_ids?: string[]
        /** @description Return only usage for these API keys. */
        api_key_ids?: string[]
        /** @description Return only usage for these models. */
        models?: string[]
        /** @description Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `size`, `source` or any combination of them. */
        group_by?: (
          | 'project_id'
          | 'user_id'
          | 'api_key_id'
          | 'model'
          | 'size'
          | 'source'
        )[]
        /** @description Specifies the number of buckets to return.
         *     - `bucket_width=1d`: default: 7, max: 31
         *     - `bucket_width=1h`: default: 24, max: 168
         *     - `bucket_width=1m`: default: 60, max: 1440
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Usage data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'usage-moderations': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
        bucket_width?: '1m' | '1h' | '1d'
        /** @description Return only usage for these projects. */
        project_ids?: string[]
        /** @description Return only usage for these users. */
        user_ids?: string[]
        /** @description Return only usage for these API keys. */
        api_key_ids?: string[]
        /** @description Return only usage for these models. */
        models?: string[]
        /** @description Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
        group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[]
        /** @description Specifies the number of buckets to return.
         *     - `bucket_width=1d`: default: 7, max: 31
         *     - `bucket_width=1h`: default: 24, max: 168
         *     - `bucket_width=1m`: default: 60, max: 1440
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Usage data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'usage-vector-stores': {
    parameters: {
      query: {
        /** @description Start time (Unix seconds) of the query time range, inclusive. */
        start_time: number
        /** @description End time (Unix seconds) of the query time range, exclusive. */
        end_time?: number
        /** @description Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
        bucket_width?: '1m' | '1h' | '1d'
        /** @description Return only usage for these projects. */
        project_ids?: string[]
        /** @description Group the usage data by the specified fields. Support fields include `project_id`. */
        group_by?: 'project_id'[]
        /** @description Specifies the number of buckets to return.
         *     - `bucket_width=1d`: default: 7, max: 31
         *     - `bucket_width=1h`: default: 24, max: 168
         *     - `bucket_width=1m`: default: 60, max: 1440
         *      */
        limit?: number
        /** @description A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
        page?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Usage data retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UsageResponse']
        }
      }
    }
  }
  'list-users': {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description Filter by the email address of users. */
        emails?: string[]
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Users listed successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UserListResponse']
        }
      }
    }
  }
  'retrieve-user': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user. */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description User retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['User']
        }
      }
    }
  }
  'modify-user': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user. */
        user_id: string
      }
      cookie?: never
    }
    /** @description The new user role to modify. This must be one of `owner` or `member`. */
    requestBody: {
      content: {
        'application/json': components['schemas']['UserRoleUpdateRequest']
      }
    }
    responses: {
      /** @description User role updated successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['User']
        }
      }
    }
  }
  'delete-user': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user. */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description User deleted successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UserDeleteResponse']
        }
      }
    }
  }
  'create-realtime-session': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Create an ephemeral API key with the given session configuration. */
    requestBody: {
      content: {
        'application/json': components['schemas']['RealtimeSessionCreateRequest']
      }
    }
    responses: {
      /** @description Session created successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RealtimeSessionCreateResponse']
        }
      }
    }
  }
  'create-realtime-transcription-session': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Create an ephemeral API key with the given session configuration. */
    requestBody: {
      content: {
        'application/json': components['schemas']['RealtimeTranscriptionSessionCreateRequest']
      }
    }
    responses: {
      /** @description Session created successfully. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RealtimeTranscriptionSessionCreateResponse']
        }
      }
    }
  }
  createResponse: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateResponse']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Response']
          'text/event-stream': components['schemas']['ResponseStreamEvent']
        }
      }
    }
  }
  getResponse: {
    parameters: {
      query?: {
        /** @description Specify additional output data to include in the response. Currently
         *     supported values are:
         *     - `file_search_call.results`: Include the search results of
         *       the file search tool call.
         *     - `message.input_image.image_url`: Include image urls from the input message.
         *     - `computer_call_output.output.image_url`: Include image urls from the computer call output.
         *      */
        include?: components['schemas']['Includable'][]
      }
      header?: never
      path: {
        /** @description The ID of the response to retrieve. */
        response_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Response']
        }
      }
    }
  }
  deleteResponse: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the response to delete. */
        response_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  listInputItems: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between
         *     1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description The order to return the input items in. Default is `asc`.
         *     - `asc`: Return the input items in ascending order.
         *     - `desc`: Return the input items in descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description An item ID to list items after, used in pagination.
         *      */
        after?: string
        /** @description An item ID to list items before, used in pagination.
         *      */
        before?: string
      }
      header?: never
      path: {
        /** @description The ID of the response to retrieve input items for. */
        response_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseItemList']
        }
      }
    }
  }
  createThread: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CreateThreadRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ThreadObject']
        }
      }
    }
  }
  createThreadAndRun: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateThreadAndRunRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RunObject']
        }
      }
    }
  }
  getThread: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the thread to retrieve. */
        thread_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ThreadObject']
        }
      }
    }
  }
  modifyThread: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the thread to modify. Only the `metadata` can be modified. */
        thread_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ModifyThreadRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ThreadObject']
        }
      }
    }
  }
  deleteThread: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the thread to delete. */
        thread_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeleteThreadResponse']
        }
      }
    }
  }
  listMessages: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
        /** @description Filter messages by the run ID that generated them.
         *      */
        run_id?: string
      }
      header?: never
      path: {
        /** @description The ID of the [thread](/docs/api-reference/threads) the messages belong to. */
        thread_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListMessagesResponse']
        }
      }
    }
  }
  createMessage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the [thread](/docs/api-reference/threads) to create a message for. */
        thread_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateMessageRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MessageObject']
        }
      }
    }
  }
  getMessage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the [thread](/docs/api-reference/threads) to which this message belongs. */
        thread_id: string
        /** @description The ID of the message to retrieve. */
        message_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MessageObject']
        }
      }
    }
  }
  modifyMessage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the thread to which this message belongs. */
        thread_id: string
        /** @description The ID of the message to modify. */
        message_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ModifyMessageRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MessageObject']
        }
      }
    }
  }
  deleteMessage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the thread to which this message belongs. */
        thread_id: string
        /** @description The ID of the message to delete. */
        message_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeleteMessageResponse']
        }
      }
    }
  }
  listRuns: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
      }
      header?: never
      path: {
        /** @description The ID of the thread the run belongs to. */
        thread_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListRunsResponse']
        }
      }
    }
  }
  createRun: {
    parameters: {
      query?: {
        /** @description A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
         *
         *     See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
         *      */
        'include[]'?: 'step_details.tool_calls[*].file_search.results[*].content'[]
      }
      header?: never
      path: {
        /** @description The ID of the thread to run. */
        thread_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateRunRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RunObject']
        }
      }
    }
  }
  getRun: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the [thread](/docs/api-reference/threads) that was run. */
        thread_id: string
        /** @description The ID of the run to retrieve. */
        run_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RunObject']
        }
      }
    }
  }
  modifyRun: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the [thread](/docs/api-reference/threads) that was run. */
        thread_id: string
        /** @description The ID of the run to modify. */
        run_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ModifyRunRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RunObject']
        }
      }
    }
  }
  cancelRun: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the thread to which this run belongs. */
        thread_id: string
        /** @description The ID of the run to cancel. */
        run_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RunObject']
        }
      }
    }
  }
  listRunSteps: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
        /** @description A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
         *
         *     See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
         *      */
        'include[]'?: 'step_details.tool_calls[*].file_search.results[*].content'[]
      }
      header?: never
      path: {
        /** @description The ID of the thread the run and run steps belong to. */
        thread_id: string
        /** @description The ID of the run the run steps belong to. */
        run_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListRunStepsResponse']
        }
      }
    }
  }
  getRunStep: {
    parameters: {
      query?: {
        /** @description A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
         *
         *     See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
         *      */
        'include[]'?: 'step_details.tool_calls[*].file_search.results[*].content'[]
      }
      header?: never
      path: {
        /** @description The ID of the thread to which the run and run step belongs. */
        thread_id: string
        /** @description The ID of the run to which the run step belongs. */
        run_id: string
        /** @description The ID of the run step to retrieve. */
        step_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RunStepObject']
        }
      }
    }
  }
  submitToolOuputsToRun: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the [thread](/docs/api-reference/threads) to which this run belongs. */
        thread_id: string
        /** @description The ID of the run that requires the tool output submission. */
        run_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SubmitToolOutputsRunRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RunObject']
        }
      }
    }
  }
  createUpload: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateUploadRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Upload']
        }
      }
    }
  }
  cancelUpload: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the Upload.
         *      */
        upload_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Upload']
        }
      }
    }
  }
  completeUpload: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the Upload.
         *      */
        upload_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CompleteUploadRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Upload']
        }
      }
    }
  }
  addUploadPart: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the Upload.
         *      */
        upload_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['AddUploadPartRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UploadPart']
        }
      }
    }
  }
  listVectorStores: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListVectorStoresResponse']
        }
      }
    }
  }
  createVectorStore: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateVectorStoreRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreObject']
        }
      }
    }
  }
  getVectorStore: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store to retrieve. */
        vector_store_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreObject']
        }
      }
    }
  }
  modifyVectorStore: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store to modify. */
        vector_store_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateVectorStoreRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreObject']
        }
      }
    }
  }
  deleteVectorStore: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store to delete. */
        vector_store_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeleteVectorStoreResponse']
        }
      }
    }
  }
  createVectorStoreFileBatch: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store for which to create a File Batch.
         *      */
        vector_store_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateVectorStoreFileBatchRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreFileBatchObject']
        }
      }
    }
  }
  getVectorStoreFileBatch: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store that the file batch belongs to. */
        vector_store_id: string
        /** @description The ID of the file batch being retrieved. */
        batch_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreFileBatchObject']
        }
      }
    }
  }
  cancelVectorStoreFileBatch: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store that the file batch belongs to. */
        vector_store_id: string
        /** @description The ID of the file batch to cancel. */
        batch_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreFileBatchObject']
        }
      }
    }
  }
  listFilesInVectorStoreBatch: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
        /** @description Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
        filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
      }
      header?: never
      path: {
        /** @description The ID of the vector store that the files belong to. */
        vector_store_id: string
        /** @description The ID of the file batch that the files belong to. */
        batch_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListVectorStoreFilesResponse']
        }
      }
    }
  }
  listVectorStoreFiles: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
         *      */
        limit?: number
        /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
         *      */
        order?: 'asc' | 'desc'
        /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
         *      */
        after?: string
        /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
         *      */
        before?: string
        /** @description Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
        filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
      }
      header?: never
      path: {
        /** @description The ID of the vector store that the files belong to. */
        vector_store_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListVectorStoreFilesResponse']
        }
      }
    }
  }
  createVectorStoreFile: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store for which to create a File.
         *      */
        vector_store_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateVectorStoreFileRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreFileObject']
        }
      }
    }
  }
  getVectorStoreFile: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store that the file belongs to. */
        vector_store_id: string
        /** @description The ID of the file being retrieved. */
        file_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreFileObject']
        }
      }
    }
  }
  updateVectorStoreFileAttributes: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store the file belongs to. */
        vector_store_id: string
        /** @description The ID of the file to update attributes. */
        file_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateVectorStoreFileAttributesRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreFileObject']
        }
      }
    }
  }
  deleteVectorStoreFile: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store that the file belongs to. */
        vector_store_id: string
        /** @description The ID of the file to delete. */
        file_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeleteVectorStoreFileResponse']
        }
      }
    }
  }
  retrieveVectorStoreFileContent: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store. */
        vector_store_id: string
        /** @description The ID of the file within the vector store. */
        file_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreFileContentResponse']
        }
      }
    }
  }
  searchVectorStore: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the vector store to search. */
        vector_store_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['VectorStoreSearchRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VectorStoreSearchResultsPage']
        }
      }
    }
  }
}
type WithRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P]
}

export type metaType = typeof meta

export interface oasTypes {
  components: components
  operations: operations
  paths: paths
  webhooks: webhooks
  schemas: components['schemas']
  meta: metaType
}

export default oasTypes

  