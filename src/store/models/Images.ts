import { nanoid } from 'nanoid';
import { storage } from 'firebase-admin';

export class Images {
  private storage: storage.Storage;

  constructor(adminStore: storage.Storage) {
    this.storage = adminStore;
  }

  async newImage(streamFile: any, imagePath: string) {
    const storageBucket = this.storage.bucket();
    const arrImagePath = imagePath.split('.');
    const file = storageBucket.file(
      `${nanoid()}.${arrImagePath[arrImagePath.length - 1]}`,
    );

    await file.save(streamFile);
    await file.makePublic();
    file.publicUrl();
    return file.name;
  }
}
