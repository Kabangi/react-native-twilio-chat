import { NativeModules, NativeAppEventEmitter, Platform } from 'react-native';

const {
  TwilioChatChannels,
  TwilioChatMessages,
  TwilioChatMembers
} = NativeModules;

class ChannelDescriptor {
  constructor(props) {
    this.sid = props.sid;
    this.friendlyName = props.friendlyName;
    this.uniqueName = props.uniqueName;
    this.attributes = props.attributes;
    this.dateCreated = props.dateCreated;
    this.dateUpdated = props.dateUpdated;
    this.createdBy = props.createdBy;
    this.membersCount = props.membersCount;
    this.messagesCount = props.messagesCount;
    this.status = props.status;
    this.unconsumedMessagesCount = props.unconsumedMessagesCount;
  }

  async getChannel() {
    return await TwilioChatChannels.getChannel(this.sid);
  }
}

export default ChannelDescriptor;
