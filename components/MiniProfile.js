function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://avatars.githubusercontent.com/u/64107817?s=400&u=89b23fddfe3b1006b3d51c2f38fd3eebaf56dc07&v=4"
        className="w-16 h-16 rounded-full border p-[2px]"
        alt="profile picture"
      />
      <div>
        <h2>mbn</h2>
        <h3>Welcome to Instagram</h3>
      </div>
    </div>
  );
}

export default MiniProfile;
