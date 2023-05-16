module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => {
    const guild = client.guilds.cache.get('YOUR SERVER ID');
    const memberCount = guild.memberCount;
    const onlineMembers = guild.members.cache.filter(member => member.presence.status === 'online' || member.presence.status === 'idle')
    client.user.setPresence({
      activity: {
        name: `${onlineCount} membri online su ${memberCount} membri`,
        type: 'PLAYING'
      },
      status: 'online'
    });
  }, 10000);
}
