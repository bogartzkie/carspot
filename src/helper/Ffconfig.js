// import { Dimensions, StatusBar, Platform } from "react-native";

// const statusBarHeight = StatusBar.currentHeight || 0;
// const { height } = Dimensions.get('window');

// const PROFILE_TX_SEND_SUCCESS = 'PROFILE_TX_SEND_SUCCESS',
//     PROFILE_TX_RECEIVE_SUCCESS = 'PROFILE_TX_RECEIVE_SUCCESS',
//     VIDEO_TX_SEND_SUCCESS = 'VIDEO_TX_SEND_SUCCESS',
//     VIDEO_TX_RECEIVE_SUCCESS = 'VIDEO_TX_RECEIVE_SUCCESS',
//     VIDEO_ADD = 'VIDEO_ADD',
//     USER_MENTION = 'USER_MENTION',
//     REPLY_USER_MENTION = 'REPLY_USER_MENTION',
//     REPLY_SENDER_WITH_AMOUNT = 'REPLY_SENDER_WITH_AMOUNT',
//     REPLY_SENDER_WITHOUT_AMOUNT = 'REPLY_SENDER_WITHOUT_AMOUNT',
//     REPLY_RECEIVER_WITH_AMOUNT = 'REPLY_RECEIVER_WITH_AMOUNT',
//     REPLY_RECEIVER_WITHOUT_AMOUNT = 'REPLY_RECEIVER_WITHOUT_AMOUNT',
//     CONTRIBUTION_THANKS = 'CONTRIBUTION_THANKS',
//     SYSTEM_NOTIFICATION = 'SYSTEM_NOTIFICATION',
//     PROFILE_TX_SEND_FAILURE = 'PROFILE_TX_SEND_FAILURE',
//     VIDEO_TX_SEND_FAILURE = 'VIDEO_TX_SEND_FAILURE',
//     TOPUP_DONE = 'TOPUP_DONE',
//     AIRDROP_DONE = 'AIRDROP_DONE',
//     RECOVERY_INITIATE = 'RECOVERY_INITIATE',
//     REPLY_TX_SEND_SUCCESS = 'REPLY_TX_SEND_SUCCESS',
//     REPLY_TX_RECEIVE_SUCCESS = 'REPLY_TX_RECEIVE_SUCCESS',
//     REPLY_TX_SEND_FAILURE = 'REPLY_TX_SEND_FAILURE',
//     REPLY_THREAD_NOTIFICATION = 'REPLY_THREAD_NOTIFICATION',
//     VIDEO_ADD_CHANNEL = 'VIDEO_ADD_CHANNEL',
//     USER_MENTION_CHANNEL = 'USER_MENTION_CHANNEL',
//     VIDEO_ADD_SUPPORTERS_CHANNEL_MEMBERS = 'VIDEO_ADD_SUPPORTERS_CHANNEL_MEMBERS'
//     ;

// const AppConfig = {

//     pepoAnimationDuration: 500,
//     logoutTimeOut: 2000,
//     loginPopoverShowTime: 10000,

//     videoRecorderConstants: {
//         longPressDelay: __DEV__ ? 2000 : 500,
//         recordingDelay: Platform.OS == "android" ? 1200 : 600,
//         tabToRecord: "TAP_TO_RECORD",
//         longPressToRecord: "LONG_PRESS_TO_RECORD",
//         recordingDelayKey: 'recording-delay',
//         videoMaxLength: 30,
//         videoLenthPreferences: {
//             "30": 30,
//             "90": 90
//         }
//     },

//     beKnownErrorCodeMaps: {
//         entityDeleted: "not_found",
//         validateUploadError: "precondition_failed"
//     },

//     userStatusMap: {
//         activated: 'activated',
//         activating: 'activating',
//         inActive: 'inactive'
//     },

//     videoStatusMap: {
//         deleted: 'deleted'
//     },

//     replyStatusMap: {
//         deleted: 'deleted'
//     },

//     deviceStatusMap: {
//         registered: 'registered',
//         authorizing: 'authorizing',
//         authorized: 'authorized',
//         revoking: 'revoking',
//         recovering: 'recovering',
//         revoked: 'revoked'
//     },

//     ruleTypeMap: {
//         directTransfer: 'direct transfer',
//         pricer: 'pricer'
//     },

//     metaProperties: {
//         type: 'user_to_user',
//         name: 'profile'
//     },

//     replyMetaProperties: {
//         type: 'user_to_user',
//         name: 'reply_on_video'
//     },

//     redemptionMetaProperties: {
//         type: 'user_to_company',
//         name: 'redemption'
//     },

//     executeTransactionPrivacyType: {
//         public: 'PUBLIC',
//         private: 'PRIVATE'
//     },

//     transactionStatus: {
//         done: 'DONE'
//     },

   
//     giphySizes: {
//         search: 'preview_gif',
//         activity: 'downsized'
//     },

//     maxBtAllowedInSingleTransfer: 50,

//     fileUploadTypes: {
//         video: 'videos',
//         image: 'images',
//         channelImages: "channel_images"
//     },

//     storageKeys: {
//         RAW_VIDEO: 'raw-video',
//         COMPRESSED_VIDEO: 'compressed-video',
//         S3_VIDEO: 's3-video',

//         VIDEO_THUMBNAIL_IMAGE: 'video-thumbnail-image',
//         S3_VIDEO_THUMBNAIL_IMAGE: 's3-video-thumbnail-image',

//         PROFILE_RAW_IMAGE: 'profile-raw-image',
//         PROFILE_CROPPED_IMAGE: 'profile-cropped-image',
//         S3_PROFILE_IMAGE: 's3-profile-image',
//         ENABLE_START_UPLOAD: 'enable-start-upload'
//     },

//     cameraConstants: {
//         RATIO: '16:9',
//         VIDEO_QUALITY: '720p',
//         VIDEO_WIDTH: 720,
//         VIDEO_HEIGHT: 1280,
//         PICTURE_SIZE: '1280x720'
//     },

//     compressionConstants: {
//         COMPRESSION_SIZE: '720X1280',
//         CRF: '28',
//         PREVIEW_CRF: '28',
//         PRESET: 'superfast',
//         PREVIEW_PRESET: 'ultrafast',
//         PIX_FMT: 'yuv420p'
//     },

//     cameraCropConstants: {
//         WIDTH: 480,
//         HEIGHT: 480
//     },

//     communityBannerSize: {
//         WIDTH: 1517,
//         HEIGHT: 650
//     },

//     videoConstant: {
//         videoWidth: '576w',
//         videoImageWidth: 'original'
//     },

//     profileImageConstants: {
//         imageWidth: '144w',
//         originalImageWidth: 'original'
//     },

//     userVideos: {
//         userScreenCoverImageWidth: '288w'
//     },

//     cameraHeightRatio: 0.6,
//     bannerHeightRatio: 0.428,

//     notificationConstants: {
//         profileTxSendKind: PROFILE_TX_SEND_SUCCESS,
//         profileTxReceiveKind: PROFILE_TX_RECEIVE_SUCCESS,
//         videoTxSendKind: VIDEO_TX_SEND_SUCCESS,
//         videoTxReceiveKind: VIDEO_TX_RECEIVE_SUCCESS,
//         videoAddKind: VIDEO_ADD,
//         userMention: USER_MENTION,
//         replyUserMention: REPLY_USER_MENTION,
//         replySenderWithAmount: REPLY_SENDER_WITH_AMOUNT,
//         replySenderWithoutAmount: REPLY_SENDER_WITHOUT_AMOUNT,
//         replyReceiverWithAmount: REPLY_RECEIVER_WITH_AMOUNT,
//         replyReceiverWithoutAmount: REPLY_RECEIVER_WITHOUT_AMOUNT,
//         AppreciationKind: CONTRIBUTION_THANKS,
//         systemNotification: SYSTEM_NOTIFICATION,
//         airDropNotification: AIRDROP_DONE,
//         topupNotification: TOPUP_DONE,
//         recoveryInitiate: RECOVERY_INITIATE,
//         replyTxReceiveSuccess: REPLY_TX_RECEIVE_SUCCESS,
//         replyTxSendSuccess: REPLY_TX_SEND_SUCCESS,
//         replyTxSendFailure: REPLY_TX_SEND_FAILURE,
//         videoTxSendFailure: VIDEO_TX_SEND_FAILURE,
//         replyThreadNotification: REPLY_THREAD_NOTIFICATION,
//         showVideoThumbnailForKinds: [
//             VIDEO_ADD,
//             USER_MENTION,
//             REPLY_USER_MENTION,
//             REPLY_SENDER_WITH_AMOUNT,
//             REPLY_SENDER_WITHOUT_AMOUNT,
//             REPLY_RECEIVER_WITH_AMOUNT,
//             REPLY_RECEIVER_WITHOUT_AMOUNT,
//             VIDEO_TX_RECEIVE_SUCCESS,
//             VIDEO_TX_SEND_SUCCESS,
//             VIDEO_TX_SEND_FAILURE,
//             VIDEO_ADD_CHANNEL,
//             USER_MENTION_CHANNEL,
//             VIDEO_ADD_SUPPORTERS_CHANNEL_MEMBERS
//         ],
//         showReplyThumbnailForKinds: [
//             REPLY_TX_RECEIVE_SUCCESS,
//             REPLY_TX_SEND_SUCCESS,
//             REPLY_TX_SEND_FAILURE,
//             REPLY_THREAD_NOTIFICATION
//         ],
//         showCoinComponentArray: [
//             PROFILE_TX_SEND_SUCCESS,
//             PROFILE_TX_RECEIVE_SUCCESS,
//             VIDEO_TX_SEND_SUCCESS,
//             VIDEO_TX_RECEIVE_SUCCESS,
//             PROFILE_TX_SEND_FAILURE,
//             VIDEO_TX_SEND_FAILURE,
//             AIRDROP_DONE,
//             TOPUP_DONE,
//             REPLY_SENDER_WITH_AMOUNT,
//             REPLY_RECEIVER_WITH_AMOUNT,
//             REPLY_TX_RECEIVE_SUCCESS,
//             REPLY_TX_SEND_SUCCESS,
//             REPLY_TX_SEND_FAILURE
//         ],
//         whitelistedNotificationKinds: [
//             PROFILE_TX_SEND_SUCCESS,
//             PROFILE_TX_RECEIVE_SUCCESS,
//             VIDEO_TX_SEND_SUCCESS,
//             VIDEO_TX_RECEIVE_SUCCESS,
//             VIDEO_ADD,
//             CONTRIBUTION_THANKS,
//             SYSTEM_NOTIFICATION,
//             PROFILE_TX_SEND_FAILURE,
//             VIDEO_TX_SEND_FAILURE,
//             REPLY_TX_RECEIVE_SUCCESS,
//             REPLY_TX_SEND_SUCCESS,
//             REPLY_TX_SEND_FAILURE,
//             REPLY_THREAD_NOTIFICATION
//         ]
//     },



//     appInstallInviteCodeASKey: "app_install_invite_code",

//     searchConfig: {
//         MIN_SEARCH_CHAR: 2
//     },

//     paymentFlowMessages: {
//         transactionSuccess: "Your account is recharged.",
//         transactionPending: "We are processing your transaction we'll update you shortly.",
//         sendingPepo: "Topping up please wait."
//     },

//     nativeStoreMap: {
//         ios: {
//             storeName: "app store"
//         },
//         android: {
//             storeName: "play store"
//         }
//     },

//     appStateMap: {
//         active: "active",
//         inactive: "inactive",
//         background: "background"
//     },

//     redemption: {
//         pepoCornsName: "Unicorns",
//         learnMoreLink: "https://intercom.help/pepo/en/articles/3418202-what-are-pepo-unicorns"
//     },

//     pepoCornsActivityKinds: ["CREDIT_PEPOCORN_SUCCESS", "CREDIT_PEPOCORN_FAILURE"],

//     routesAnalyticsMap: {
//         InAppBrowserStack: 'InAppBrowser',
//         UserActivatingScreen: 'UserActivating',
//         SetPinScreen: 'SetPin',
//         ConfirmPinScreen: 'ConfirmPin',
//         Home: 'HomeFeed',
//         HomeScreen: 'HomeFeed',
//         Search: 'Search',
//         SearchScreen: 'Search',
//         Notification: 'Activity',
//         NotificationScreen: 'Activity',
//         Profile: 'MyProfile',
//         ProfileScreen: 'MyProfile',
//         CaptureVideo: 'CaptureVideo',
//         TransactionScreen: 'Transaction',
//         TransactionSuccess: 'Transaction/Success',
//         UsersProfileScreen: 'UsersProfile',
//         SupportingListScreen: 'SupportingList',
//         SupportersListScreen: 'SupportersList',
//         UserVideoHistory: 'UsersProfile/VideoHistory',
//         CaptureImageScreen: 'CaptureImage',
//         ImageGalleryScreen: 'ImageGallery',
//         StoreProductsScreen: 'InAppPurchase',
//         ProfileEdit: 'MyProfile/Edit',
//         BioScreen: 'MyProfile/Edit/Bio',
//         EmailScreen: 'MyProfile/Edit/Email',
//         ReferAndEarn: 'ReferAndEarn',
//         Invites: 'Invites',
//         WalletSettingScreen: 'WalletSetting',
//         WalletDetails: 'WalletDetails',
//         SayThanksScreen: 'SayThanks',
//         VideoPlayer: 'VideoPlayer',
//         InviteCodeScreen: 'InviteCode',
//         AddEmailScreen: 'AddEmail',
//         InAppBrowserComponent: 'InAppBrowser',
//         FanVideoDetails: 'CaptureVideo/VideoDetails',
//         VideoTags: 'Tags',
//         FullScreenVideoCollection: 'Tags/VideoHistory',
//         RedemptiomScreen: 'Redemption',
//         RedemptionSuccess: 'Redemption/Success',
//         CouchMarks: 'CouchMarks',
//         AuthDeviceDrawer: 'DeviceUnauthorized',
//         FullScreenReplyCollection: 'FullScreenReplyCollection',
//         VideoReplyPlayer: 'VideoReplyPlayer',
//         VideoReplies: 'VideoReplies',
//         LoginPopover: 'LoginPopover',
//         //Dont change the key name,  values as u wish start
//         twitter: 'TwitterLogin',
//         google: 'GoogleLogin',
//         apple: 'AppleLogin',
//         github: 'GithubLogin',
//         ChannelsScreen: 'Channel'
//         //Dont change the key name,  values as u wish end
//     },
//     default_bt_amt: 10,

//     videoTypes: {
//         post: 'post',
//         reply: 'reply'
//     },

//     MaxDescriptionArea: 35250,
//     thumbnailListConstants: {


//         // NOTE: Outer Circle Configs.
//         // -----------------------------------------------------------------------
//         // 1. outerRingDiameter - Replaces old iconHeight/iconWidth.
//         //
//         // 2. borderWidth       - The border width is applied outside the
//         //                        this iconHeight (Diameter).
//         //
//         // 3. transparentGap    - Gap between the inner edge of Outer-Circle
//         //                        and icon itself.
//         //
//         // 4. iconImageDiameter - Diameter of icon Image is computed
//         //                        using outerRingDiameter, outerBorderWidth
//         //                        and transparentGap.
//         // -----------------------------------------------------------------------



//         authServiceTypes: {
//             google: "google",
//             apple: "apple",
//             github: "github",
//             twitter: "twitter"
//         },

//         channelConstants: {
//             SCREEN_NAME: "ChannelsScreen",
//             newChannelHeaderText: "New Community",
//             types: {
//                 create: "create",
//                 edit: "edit"
//             },
//             btnPreText: 'Submit',
//             btnPostText: 'Submiting...',
//             MAX_NO_OF_TAGS: 5,
//             NAME_MAXLENGTH: 25,
//             TAGLINE_MAXLENGTH: 45,
//             ABOUT_INFO_MAXLENGTH: 400,
//             createSuccessMsg: 'Community created sucessfully',
//             editSuccessMsg: 'Community updated sucessfully',
//             learnMoreLink: "https://intercom.help/pepo/en/articles/3901708-choosing-the-right-hashtags-for-your-community-on-pepo"
//         },

//         cameraStack: 'CaptureVideo',

//         stitchingStatus: {
//             done: 'DONE',
//             failed: 'FAILED',
//             not_started: 'NOT_STARTED',
//             in_progress: 'IN_PROGRESS'
//         },

//         remoteConfigCacheTimeout: 3600

//     }
// }



// export default AppConfig;
