import { Account, Avatars, Client, Databases, ID, Permission, Query, Role } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1', // Appwrite Endpoint
    platform: 'com.company.moments', // App package name for Android or your app bundle identifier for iOS
    projectId: '68d3945b0005478d482e', // Appwrite Project ID
    databaseId: '68d398b6003b5b9e8f2d', // Appwrite Database ID
    userTableId: 'users',
    videoTableId: 'videos',
    storageId: '68d39c820016121dd722'
}

//connect the app to appwrite server
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
        const session = await account.createEmailPasswordSession({email, password});
        return session;

    } 
    catch (error: unknown) {
      throw error;
    }
}

export const createUser = async (email: string, password: string, username: string) => {
  try {

    const currentSession = await account.get();
    if(currentSession){
      await account.deleteSession({ sessionId:'current'});
    }

    const newAccount = await account.create({userId:ID.unique(), email, password, name: username});
    const avatarUrl = avatars.getInitials({name: username}).toString();

    if (avatarUrl.length > 1000) {
      throw new Error('Avatar URL exceeds 1000 characters');
    }

    await login(email, password);
    const currentUser = await account.get();
    if(!currentUser) throw new Error("Could not retrieve current user after login!");

    const accountIdToUse = currentUser.$id;

    const newUser = await databases.createDocument({
      databaseId: appwriteConfig.databaseId,
      collectionId: appwriteConfig.userTableId,
      documentId: ID.unique(),
      data: {
        accountId: currentUser.$id,
        email,
        username,
        avatar: avatarUrl,
      },
      permissions: [
        Permission.read(Role.user(accountIdToUse)),
        Permission.write(Role.user(accountIdToUse)),
        Permission.delete(Role.user(accountIdToUse)),
      ],
    });

    return newUser;

  }
  catch (error: unknown) {
      throw error;
  }
};

export const getCurrentUser = async () =>{
  try{
    const currentAccount = await account.get();

    if(!currentAccount) throw Error;

    const currentUser = await databases.listDocuments({
      databaseId: appwriteConfig.databaseId,
      collectionId: appwriteConfig.userTableId,
      queries: [Query.equal('accountId', currentAccount.$id)]
    })

    if (currentUser.documents.length === 0) {
      return null; 
    }

    return currentUser.documents[0];
  }
  catch(e){
    console.log(e);
    return null;
  }
} 

export const getAllPosts = async () => {
  try{
    const posts = await databases.listDocuments({
      databaseId: appwriteConfig.databaseId,
      collectionId: appwriteConfig.videoTableId,
    })

    return posts.documents;
  }
  catch(e){
    console.log(e);
    return null;
  }
}