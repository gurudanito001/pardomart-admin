'use client';

import { useState } from 'react';

// --- COMPONENT 1: Fees & Logistics ---
function FeesAndLogisticsForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  // Storing as strings fixes the "stuck 0" issue when deleting input
  const [settings, setSettings] = useState({
    taxFee: '5.0',
    serviceFee: '2.5',
    deliveryFee: '10.0',
    deliveryRadius: '15',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Convert them back to numbers right before sending to the backend
      const payload = {
        taxFee: parseFloat(settings.taxFee) || 0,
        serviceFee: parseFloat(settings.serviceFee) || 0,
        deliveryFee: parseFloat(settings.deliveryFee) || 0,
        deliveryRadius: parseFloat(settings.deliveryRadius) || 0,
      }
      console.log('Patching platform settings:', payload);
      
      await new Promise((resolve) => setTimeout(resolve, 800)); // Mock delay
      alert('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Fees & Logistics</h2>
      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tax Fee (%)</label>
            <input
              type="number"
              name="taxFee"
              step="0.01"
              value={settings.taxFee}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E55B13] focus:border-[#E55B13] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Fee (%)</label>
            <input
              type="number"
              name="serviceFee"
              step="0.01"
              value={settings.serviceFee}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E55B13] focus:border-[#E55B13] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Base Delivery Fee ($)</label>
            <input
              type="number"
              name="deliveryFee"
              step="0.01"
              value={settings.deliveryFee}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E55B13] focus:border-[#E55B13] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Radius (Miles)</label>
            <input
              type="number"
              name="deliveryRadius"
              step="0.1"
              value={settings.deliveryRadius}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E55B13] focus:border-[#E55B13] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <p className="text-xs text-gray-500 mt-1">Distance used to alert drivers of new orders.</p>
          </div>
        </div>
        <div className="flex justify-end pt-4 border-t border-gray-100">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-[#06888C] text-white rounded-md hover:opacity-90 disabled:opacity-50 transition-colors"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}

// --- COMPONENT 2: Categories Manager ---
function CategoriesManager() {
  const [categories, setCategories] = useState([
    { id: '1', name: 'Groceries', isActive: true },
    { id: '2', name: 'Electronics', isActive: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Added an ID field so we know if we are editing or creating
  const [newCategory, setNewCategory] = useState({ id: '', name: '', isActive: true });

  const handleOpenModal = () => setIsModalOpen(true);
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewCategory({ id: '', name: '', isActive: true }); 
  };

  // Wire up the Edit button
  const handleEditClick = (category: any) => {
    setNewCategory(category);
    setIsModalOpen(true);
  };

  // Wire up the Deactivate/Activate button
  const handleToggleStatus = (id: string) => {
    setCategories((prev) => 
      prev.map((cat) => cat.id === id ? { ...cat, isActive: !cat.isActive } : cat)
    );
  };

  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // If the category has an ID, we are editing it. Otherwise, create a new one.
      if (newCategory.id) {
        setCategories((prev) => 
          prev.map((cat) => cat.id === newCategory.id ? { ...cat, name: newCategory.name, isActive: newCategory.isActive } : cat)
        );
      } else {
        setCategories((prev) => [
          ...prev, 
          { id: Date.now().toString(), name: newCategory.name, isActive: newCategory.isActive }
        ]);
      }
      
      handleCloseModal();
    } catch (error) {
      console.error('Failed to save category:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Product Categories</h2>
        <button 
          onClick={handleOpenModal}
          className="px-4 py-2 bg-[#06888C] text-white text-sm font-medium rounded-md hover:opacity-90 transition-colors"
        >
          + Add Category
        </button>
      </div>

      <div className="border border-gray-200 rounded-md overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 font-medium">Category Name</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900 font-medium">{category.name}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {category.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-3">
                  <button 
                    onClick={() => handleEditClick(category)}
                    className="text-[#06888C] hover:opacity-80 font-medium"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleToggleStatus(category.id)}
                    className={`${category.isActive ? 'text-red-600 hover:text-red-800' : 'text-green-600 hover:text-green-800'} font-medium`}
                  >
                    {category.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-gray-500">
                  No categories found. Add one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* --- ADD/EDIT CATEGORY MODAL --- */}
      {isModalOpen && (
        // Replaced solid black background with a clean, blurred white overlay
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-[0.5px]">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md border border-gray-100 overflow-hidden">
            
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">
                {newCategory.id ? 'Edit Category' : 'Add New Category'}
              </h3>
              <button 
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveCategory}>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Fresh Produce"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E55B13] focus:border-[#E55B13] placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Initial Status
                  </label>
                  <select
                    value={newCategory.isActive ? 'active' : 'inactive'}
                    onChange={(e) => setNewCategory({ ...newCategory, isActive: e.target.value === 'active' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E55B13] focus:border-[#E55B13] bg-white"
                  >
                    <option value="active">Active (Visible to vendors)</option>
                    <option value="inactive">Inactive (Hidden)</option>
                  </select>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-100 flex justify-end space-x-3 bg-gray-50">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSaving}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving || !newCategory.name.trim()}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#06888C] rounded-md hover:opacity-90 disabled:opacity-50 transition-colors"
                >
                  {isSaving ? 'Saving...' : 'Save Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// --- MAIN PAGE WRAPPER ---
export default function Settings() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Platform Settings</h1>
        <p className="text-gray-600">Manage global fees, logistics, and product categories.</p>
      </div>

      <FeesAndLogisticsForm />
      
      <CategoriesManager />
    </div>
  );
}