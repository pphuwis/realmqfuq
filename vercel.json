export default async function handler(req, res) {
  const userId = req.query.id;

  if (!userId) {
    return res.status(400).json({
      error: "Missing user id"
    });
  }

  try {
    const [userRes, thumbRes, friendsRes, followersRes] =
      await Promise.all([
        fetch(`https://users.roblox.com/v1/users/${userId}`),
        fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png&isCircular=false`),
        fetch(`https://friends.roblox.com/v1/users/${userId}/friends/count`),
        fetch(`https://friends.roblox.com/v1/users/${userId}/followers/count`)
      ]);

    const user = await userRes.json();
    const thumb = await thumbRes.json();
    const friends = await friendsRes.json();
    const followers = await followersRes.json();

    res.status(200).json({
      displayName: user.displayName,
      username: user.name,
      avatar: thumb.data?.[0]?.imageUrl,
      friends: friends.count || 0,
      followers: followers.count || 0
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}
