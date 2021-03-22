import * as Permissions from "expo-permissions";

class UserPermissions {
  getCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status != "granted") {
      alert("We need permissions to access your comara roll");
    }
  };
}

export default new UserPermissions();
