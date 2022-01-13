const getRepos = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/martvdberg/repos"
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};
