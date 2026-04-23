# Firebase Documentation

## Database Structure

### Collections

#### `weights` Collection

Stores all weight entries for users.

**Document Structure:**

```json
{
  "uid": "user_id",
  "value": 75.5,
  "date": "2026-04-23T10:30:00.000Z"
}
```

**Fields:**

- `uid` (string): User ID from Firebase Auth
- `value` (number): Weight value in kg
- `date` (string): ISO 8601 timestamp when weight was recorded

**Queries:**

- Filter by user: `where("uid", "==", user.uid)`

---

#### `goals` Collection

Stores weight goals for users. One document per user with document ID = user.uid.

**Document ID:** `{user.uid}`

**Document Structure:**

```json
{
  "uid": "user_id",
  "value": 70,
  "createdAt": "2026-04-20T08:00:00.000Z",
  "updatedAt": "2026-04-23T10:30:00.000Z"
}
```

**Fields:**

- `uid` (string): User ID from Firebase Auth
- `value` (number): Target weight goal in kg
- `createdAt` (string): ISO 8601 timestamp when goal was created
- `updatedAt` (string): ISO 8601 timestamp when goal was last updated

**Usage:**

- Get user's goal: `getDoc(doc(db, "goals", user.uid))`
- Save/Update goal: `setDoc(doc(db, "goals", user.uid), goalData)`

---

## Service Functions

### Weight Functions

#### `saveWeight(value: number): Promise<void>`

Adds a new weight entry for the current user to Firestore.

**Parameters:**

- `value`: Weight value in kg

**Example:**

```typescript
await saveWeight(75.5);
```

#### `getWeights(): Promise<WeightEntry[]>`

Retrieves all weight entries for the current user from Firestore.

**Returns:** Array of weight entries filtered by user UID

**Example:**

```typescript
const weights = await getWeights();
```

---

### Goal Functions

#### `saveGoal(value: number): Promise<void>`

Saves or updates the weight goal for the current user.

**Parameters:**

- `value`: Target weight in kg

**Example:**

```typescript
await saveGoal(70);
```

#### `getGoal(): Promise<number | null>`

Retrieves the weight goal for the current user.

**Returns:** Goal value in kg, or null if no goal is set

**Example:**

```typescript
const goal = await getGoal();
```

---

## Firestore Security Rules

### Recommended Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /weights/{document=**} {
      allow read, write: if request.auth.uid == resource.data.uid;
      allow create: if request.auth.uid == request.resource.data.uid;
    }

    match /goals/{userId} {
      allow read, write: if request.auth.uid == userId;
      allow create: if request.auth.uid == request.resource.data.uid;
    }
  }
}
```

---

## Migration Notes

- **Removed:** localStorage for storing weights and goals
- **Benefits:**
  - Data persists across devices when user logs in
  - Real-time sync capability
  - Better data privacy (server-side validation)
  - Automatic data backup
