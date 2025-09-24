import { Account, AppwriteException, Avatars, Client, Databases, ID, Permission, Role } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1', // Appwrite Endpoint
    platform: 'com.company.moments', // App package name for Android or your app bundle identifier for iOS
    projectId: '68d3945b0005478d482e', // Appwrite Project ID
    databaseId: '68d398b6003b5b9e8f2d', // Appwrite Database ID
    userTableId: 'users',
    videoTableId: 'videos',
    storageId: '68d39c820016121dd722'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const login = async (email: string, password: string) => {
    try {
        // Use the new, non-deprecated method
        const session = await account.createEmailPasswordSession({email, password});
        return session;

    } 
    catch (error: unknown) {
        throw new AppwriteException(
            error instanceof Error ? error.message : 'Unknown error occurred',
            error instanceof Error && 'code' in error ? (error as any).code : undefined
    );
    }
}

export const createUser = async (email: string, password: string, username: string) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, username);
    const avatarUrl = avatars.getInitials(username);

    // Create a session for the new user
    await login(email, password);

    // Restrict document permissions to the user who created it
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userTableId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      },
      [
        Permission.read(Role.user(newAccount.$id)), // Only the user can read
        Permission.write(Role.user(newAccount.$id)), // Only the user can update
        Permission.delete(Role.user(newAccount.$id)), // Only the user can delete
      ]
    );

    return newUser;
  } catch (error: unknown) {
    throw new AppwriteException(
      error instanceof Error ? error.message : 'Unknown error occurred',
      error instanceof Error && 'code' in error ? (error as any).code : undefined
    );
  }
};



