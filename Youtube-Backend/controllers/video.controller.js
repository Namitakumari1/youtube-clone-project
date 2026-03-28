import Video from "../models/Video.model.js";
import Channel from "../models/Channel.model.js";

export const createVideo = async (req, res) => {
  try {
    const { title, description, videoUrl, thumbnailUrl, channelId, category} = req.body;

    const newVideo = new Video({
      title,
      description,
      videoUrl,
      thumbnailUrl,
      channel: channelId,
      uploader: '69c50f58913aa0eb99ff958d',
      category
    });

    await newVideo.save();

    // add video to channel
    await Channel.findByIdAndUpdate(channelId, {
      $push: { videos: newVideo._id }
    });

    res.status(201).json({
      message: "Video created successfully",
      video: newVideo
    });

  } catch (error) {
    console.log("CREATE VIDEO ERROR:", error);
    
    res.status(500).json({
      message: "Error creating video",
      error: error.message
    });
  }
};

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("channel");

    res.status(200).json({
      videos
    });
  } catch (error) {
      res.status(500).json({
        message: "Error fetching videos",
        error
      });
  }
};

export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate("channel");

    res.status(200).json({
      video
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching video",
      error
    });
  }
};