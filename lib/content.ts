import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import { Content, ContentType } from '@/types/content';

export const contentCollection = collection(db, 'content');

export async function createContent(content: Omit<Content, 'id'>): Promise<string> {
  const docRef = await addDoc(contentCollection, {
    ...content,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    views: 0,
    likes: 0,
  });
  return docRef.id;
}

export async function updateContent(id: string, content: Partial<Content>): Promise<void> {
  const docRef = doc(db, 'content', id);
  await updateDoc(docRef, {
    ...content,
    updatedAt: Timestamp.now(),
  });
}

export async function getContent(id: string): Promise<Content | null> {
  const docRef = doc(db, 'content', id);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) return null;
  
  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate(),
    updatedAt: data.updatedAt?.toDate(),
    publishedAt: data.publishedAt?.toDate(),
  } as Content;
}

export async function getContents(options?: {
  type?: ContentType;
  published?: boolean;
  featured?: boolean;
  category?: string;
  limitCount?: number;
}): Promise<Content[]> {
  let q = query(contentCollection);
  
  if (options?.type) {
    q = query(q, where('type', '==', options.type));
  }
  
  if (options?.published !== undefined) {
    q = query(q, where('published', '==', options.published));
  }
  
  if (options?.featured) {
    q = query(q, where('featured', '==', true));
  }
  
  if (options?.category) {
    q = query(q, where('category', '==', options.category));
  }
  
  q = query(q, orderBy('createdAt', 'desc'));
  
  if (options?.limitCount) {
    q = query(q, limit(options.limitCount));
  }
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
      publishedAt: data.publishedAt?.toDate(),
    } as Content;
  });
}

export async function deleteContent(id: string): Promise<void> {
  const docRef = doc(db, 'content', id);
  await deleteDoc(docRef);
}

