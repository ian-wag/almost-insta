function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://avatars.githubusercontent.com/u/64107817?s=400&u=89b23fddfe3b1006b3d51c2f38fd3eebaf56dc07&v=4"
        className="w-16 h-16 rounded-full border p-[2px]"
        alt="profile picture"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">mbn</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
