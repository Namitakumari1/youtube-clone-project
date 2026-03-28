import Channel from "../models/Channel.model.js";

export const createChannel = async (req, res) => {
  try {
    const { channelName, description } = req.body;

    const newChannel = new Channel({
      channelName,
      description,
      owner: req.user.userId   // comes from JWT middleware
    });

    await newChannel.save();

    res.status(201).json({
      message: "Channel created successfully",
      channel: newChannel
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating channel",
      error
    });
  }
};

export const getChannel = async (req, res) => {
  try {
    const { channelId } = req.params;

    const channel = await Channel.findById(channelId);

    if (!channel) {
      return res.status(404).json({
        message: "Channel not found"
      });
    }

    res.status(200).json({
      channel
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching channel",
      error
    });
  }
};

export const updateChannel = async (req, res) => {
  try {
    const { channelId } = req.params;
    const { channelName, description } = req.body;

    const updatedChannel = await Channel.findByIdAndUpdate(
      channelId,
      { channelName, description },
      { new: true }
    );

    res.status(200).json({
      message: "Channel updated successfully",
      channel: updatedChannel
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating channel",
      error
    });
  }
};